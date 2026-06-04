#!/usr/bin/env bash

set -euo pipefail

DB_CONTAINER="${DB_CONTAINER:-ta-dev-postgres-1}"
DB_NAME="${DB_NAME:-serenity}"
DB_USER="${DB_USER:-}"
DB_PASSWORD="${DB_PASSWORD:-}"
KRATOS_ADMIN_URL="${KRATOS_ADMIN_URL:-http://localhost:4434}"
ELASTIC_URL="${ELASTIC_URL:-http://localhost:9200}"

CATEGORY_GROUP_ID="11111111-1111-4111-8111-111111111111"
CATEGORY_MAIN_ID="22222222-2222-4222-8222-222222222222"
CATEGORY_EXTRA_ID="33333333-3333-4333-8333-333333333333"
CATEGORY_OFFICE_ID="44444444-4444-4444-8444-444444444444"

PORTFOLIO_ONE_ID="55555555-5555-4555-8555-555555555555"
PORTFOLIO_TWO_ID="66666666-6666-4666-8666-666666666666"

PROJECT_ONE_ID="seed-project-kitchen"
PROJECT_TWO_ID="seed-project-office"

SEED_CUSTOMER_EMAIL="${SEED_CUSTOMER_EMAIL:-seed.customer@serenity.local}"
SEED_SPECIALIST_EMAIL="${SEED_SPECIALIST_EMAIL:-seed.specialist@serenity.local}"

require_command() {
  local name="$1"

  if ! command -v "$name" >/dev/null 2>&1; then
    echo "Command '$name' is required"
    exit 1
  fi
}

ensure_identity() {
  local email="$1"
  local identities_json
  local id

  identities_json="$(curl -fsS "$KRATOS_ADMIN_URL/identities")"
  id="$(echo "$identities_json" | jq -r --arg email "$email" '.[] | select(.traits.email == $email) | .id' | head -n 1)"

  if [[ -n "$id" && "$id" != "null" ]]; then
    echo "$id"
    return
  fi

  id="$(
    curl -fsS \
      -X POST "$KRATOS_ADMIN_URL/identities" \
      -H 'Content-Type: application/json' \
      -d "{\"schema_id\":\"default\",\"traits\":{\"email\":\"$email\"},\"state\":\"active\"}" \
      | jq -r '.id'
  )"

  if [[ -z "$id" || "$id" == "null" ]]; then
    echo "Failed to create identity for '$email'"
    exit 1
  fi

  echo "$id"
}

require_command curl
require_command jq
require_command docker

if ! docker ps --format '{{.Names}}' | grep -qx "$DB_CONTAINER"; then
  echo "Database container '$DB_CONTAINER' is not running"
  exit 1
fi

if [[ -z "$DB_USER" ]]; then
  DB_USER="$(docker exec "$DB_CONTAINER" sh -lc 'printf %s "$POSTGRES_USER"')"
fi

if [[ -z "$DB_PASSWORD" ]]; then
  DB_PASSWORD="$(docker exec "$DB_CONTAINER" sh -lc 'printf %s "$POSTGRES_PASSWORD"')"
fi

if [[ -z "$DB_NAME" || -z "$DB_USER" || -z "$DB_PASSWORD" ]]; then
  echo "Database credentials are not resolved for '$DB_CONTAINER'"
  echo "Set DB_NAME/DB_USER/DB_PASSWORD explicitly and retry"
  exit 1
fi

customer_id="$(ensure_identity "$SEED_CUSTOMER_EMAIL")"
specialist_id="$(ensure_identity "$SEED_SPECIALIST_EMAIL")"

docker exec \
  -i \
  -e PGPASSWORD="$DB_PASSWORD" \
  "$DB_CONTAINER" \
  psql \
  -U "$DB_USER" \
  -d "$DB_NAME" \
  -v ON_ERROR_STOP=1 \
  -v category_group_id="$CATEGORY_GROUP_ID" \
  -v category_main_id="$CATEGORY_MAIN_ID" \
  -v category_extra_id="$CATEGORY_EXTRA_ID" \
  -v category_office_id="$CATEGORY_OFFICE_ID" \
  -v portfolio_one_id="$PORTFOLIO_ONE_ID" \
  -v portfolio_two_id="$PORTFOLIO_TWO_ID" \
  -v project_one_id="$PROJECT_ONE_ID" \
  -v project_two_id="$PROJECT_TWO_ID" \
  -v customer_id="$customer_id" \
  -v specialist_id="$specialist_id" <<'SQL'
INSERT INTO category_group (id, version, name, "createdAt", "updatedAt")
VALUES (:'category_group_id'::uuid, 0, 'General renovation', now(), now())
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  "updatedAt" = now();

INSERT INTO category (id, version, name, "groupId", "createdAt", "updatedAt")
VALUES
  (:'category_main_id'::uuid, 0, 'Apartment renovation', :'category_group_id'::uuid, now(), now()),
  (:'category_extra_id'::uuid, 0, 'House renovation', :'category_group_id'::uuid, now(), now()),
  (:'category_office_id'::uuid, 0, 'Office renovation', :'category_group_id'::uuid, now(), now())
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  "groupId" = EXCLUDED."groupId",
  "updatedAt" = now();

INSERT INTO customer (id, version, "openProjects", "completedProjects", "createdAt", "updatedAt")
VALUES (:'customer_id'::uuid, 0, 2, 1, now(), now())
ON CONFLICT (id) DO UPDATE SET
  "openProjects" = EXCLUDED."openProjects",
  "completedProjects" = EXCLUDED."completedProjects",
  "updatedAt" = now();

INSERT INTO specialist (
  id,
  version,
  description,
  "specialisationMain",
  "specialisationAdditional",
  "interactionFormofwork",
  "interactionNumberofemployees",
  "interactionName",
  rating,
  "reviewCount",
  "completedProjects",
  "accountType",
  "accountStat",
  "createdAt",
  "updatedAt"
)
VALUES (
  :'specialist_id'::uuid,
  0,
  'Full-cycle team: from rough-in to final handover.',
  :'category_main_id',
  :'category_office_id',
  'company',
  '10-50',
  'Seed Specialist Team',
  5,
  12,
  21,
  'pro',
  '{"projects": 21}'::jsonb,
  now(),
  now()
)
ON CONFLICT (id) DO UPDATE SET
  description = EXCLUDED.description,
  "specialisationMain" = EXCLUDED."specialisationMain",
  "specialisationAdditional" = EXCLUDED."specialisationAdditional",
  "interactionFormofwork" = EXCLUDED."interactionFormofwork",
  "interactionNumberofemployees" = EXCLUDED."interactionNumberofemployees",
  "interactionName" = EXCLUDED."interactionName",
  rating = EXCLUDED.rating,
  "reviewCount" = EXCLUDED."reviewCount",
  "completedProjects" = EXCLUDED."completedProjects",
  "accountType" = EXCLUDED."accountType",
  "accountStat" = EXCLUDED."accountStat",
  "updatedAt" = now();

INSERT INTO project (
  id,
  version,
  "customerId",
  name,
  "categoryId",
  budget,
  "legalEntitiesOnly",
  "beginningOfWork",
  description,
  photos,
  "addressFormatted",
  worksheet,
  status,
  "replyCount",
  "publicationDate",
  "createdAt",
  "updatedAt"
)
VALUES
  (
    :'project_one_id',
    0,
    :'customer_id',
    'Kitchen renovation in city apartment',
    :'category_main_id',
    350000,
    false,
    'soon',
    'Demolition, electrical rework, and final finish.',
    'seed-photo-1,seed-photo-2',
    'Moscow, Hamovniki, 12',
    '{}',
    'published',
    2,
    now(),
    now(),
    now()
  ),
  (
    :'project_two_id',
    0,
    :'customer_id',
    'Office cosmetic renovation',
    :'category_office_id',
    180000,
    true,
    'soon',
    'Painting, lighting, partitions, and opening prep.',
    'seed-photo-3',
    'Moscow, Presnenskaya embankment, 8',
    '{}',
    'published',
    1,
    now(),
    now(),
    now()
  )
ON CONFLICT (id) DO UPDATE SET
  "customerId" = EXCLUDED."customerId",
  name = EXCLUDED.name,
  "categoryId" = EXCLUDED."categoryId",
  budget = EXCLUDED.budget,
  "legalEntitiesOnly" = EXCLUDED."legalEntitiesOnly",
  "beginningOfWork" = EXCLUDED."beginningOfWork",
  description = EXCLUDED.description,
  photos = EXCLUDED.photos,
  "addressFormatted" = EXCLUDED."addressFormatted",
  worksheet = EXCLUDED.worksheet,
  status = EXCLUDED.status,
  "replyCount" = EXCLUDED."replyCount",
  "publicationDate" = EXCLUDED."publicationDate",
  "updatedAt" = now();

INSERT INTO portfolio (id, version, "userId", name, images, "createdAt", "updatedAt")
VALUES
  (:'portfolio_one_id'::uuid, 0, :'specialist_id', 'Kitchen in Park Residence', null, now(), now()),
  (:'portfolio_two_id'::uuid, 0, :'specialist_id', 'Open-space office', null, now(), now())
ON CONFLICT (id) DO UPDATE SET
  "userId" = EXCLUDED."userId",
  name = EXCLUDED.name,
  images = EXCLUDED.images,
  "updatedAt" = now();
SQL

curl -fsS \
  -X PUT \
  "$ELASTIC_URL/projects/ciphertrick/$PROJECT_ONE_ID" \
  -H 'Content-Type: application/json' \
  -d "{\"name\":\"Kitchen renovation in city apartment\",\"description\":\"Demolition, electrical rework, and final finish.\",\"status\":\"published\",\"category\":\"Apartment renovation\",\"categoryId\":\"$CATEGORY_MAIN_ID\"}" \
  >/dev/null

curl -fsS \
  -X PUT \
  "$ELASTIC_URL/projects/ciphertrick/$PROJECT_TWO_ID" \
  -H 'Content-Type: application/json' \
  -d "{\"name\":\"Office cosmetic renovation\",\"description\":\"Painting, lighting, partitions, and opening prep.\",\"status\":\"published\",\"category\":\"Office renovation\",\"categoryId\":\"$CATEGORY_OFFICE_ID\"}" \
  >/dev/null

curl -fsS \
  -X PUT \
  "$ELASTIC_URL/specialists/ciphertrick/$specialist_id" \
  -H 'Content-Type: application/json' \
  -d "{\"description\":\"Full-cycle team: from rough-in to final handover.\",\"specialisation\":[\"Apartment renovation\",\"Office renovation\"],\"specialisationId\":[\"$CATEGORY_MAIN_ID\",\"$CATEGORY_OFFICE_ID\"]}" \
  >/dev/null

echo "Seed completed:"
echo "  customer:   $customer_id ($SEED_CUSTOMER_EMAIL)"
echo "  specialist: $specialist_id ($SEED_SPECIALIST_EMAIL)"
echo "  projects:   $PROJECT_ONE_ID, $PROJECT_TWO_ID"
