FROM node:13-alpine as builder

ADD . /app
RUN cd /app && yarn install --silent --no-progress
RUN cd /app && yarn workspace @hits/service build

FROM node:13-alpine

COPY --from=builder /app/backend/hits/service/dist /app/dist
COPY --from=builder /app/backend/hits/service/package.json /app
COPY --from=builder /app/node_modules /app/node_modules

RUN rm -r /app/node_modules/@protos
COPY --from=builder /app/backend/protos /app/node_modules/@protos

WORKDIR /app

ENV NODE_ENV production

CMD ["node", "dist/index.js"]
