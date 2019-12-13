FROM node:13-alpine as builder

ADD . /app
RUN cd /app && yarn install --silent --no-progress
RUN cd /app/frontend/design/app && yarn run build

FROM nginx:alpine

COPY --from=builder /app/frontend/design/app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
