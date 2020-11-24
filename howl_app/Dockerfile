# BUILD
FROM node:12.16-slim as builder
WORKDIR /howl-app
ENV PATH /howl-app/node_modules/.bin:$PATH
ADD package.json yarn.lock /howl-app/

RUN yarn install --silent
COPY . /howl-app
RUN yarn build

# SETUP
FROM nginx:1.16.0-alpine
RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx-custom.conf
COPY --from=builder /howl-app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
