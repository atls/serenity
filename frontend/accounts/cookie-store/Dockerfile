FROM node:12-alpine as builder

ADD . /app
RUN cd /app && yarn install --silent --no-progress
RUN cd /app/frontend/accounts/cookie-store && yarn run build

FROM node:12-alpine

COPY --from=builder /app/frontend/accounts/cookie-store/dist /app/dist
COPY --from=builder /app/frontend/accounts/cookie-store/package.json /app
COPY --from=builder /app/node_modules /app/node_modules

WORKDIR /app

ENV NODE_ICU_DATA /app/node_modules/full-icu
ENV NODE_ENV production

CMD ["yarn", "start"]
