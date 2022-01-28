FROM node:14-alpine as builder

ADD . /app
RUN cd /app && yarn install --silent --no-progress
RUN cd /app && yarn workspace @hits/app build

FROM node:14-alpine

COPY --from=builder /app/backend/hits/app/dist /app/dist
COPY --from=builder /app/backend/hits/app/package.json /app
COPY --from=builder /app/node_modules /app/node_modules

WORKDIR /app

ENV NODE_ENV production

CMD ["yarn", "start"]
