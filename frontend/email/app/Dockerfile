FROM node:alpine as builder

ADD . /app
RUN cd /app && yarn install --silent --no-progress
RUN cd /app/frontend/email/app && yarn run build

FROM node:alpine

COPY --from=builder /app/frontend/email/app/dist /app/dist
COPY --from=builder /app/frontend/email/app/package.json /app
COPY --from=builder /app/node_modules /app/node_modules

RUN rm -r /app/node_modules/@protos
COPY --from=builder /app/backend/protos /app/node_modules/@protos

WORKDIR /app

ENV NODE_ENV production

CMD ["yarn", "start"]
