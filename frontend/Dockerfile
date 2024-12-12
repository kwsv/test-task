# build project

FROM node:latest AS build
WORKDIR /frontend

ARG BACKEND_DOMAIN
ARG BACKEND_PORT

ENV BACKEND_DOMAIN="${BACKEND_DOMAIN}"
ENV BACKEND_PORT="${BACKEND_PORT}"

COPY . .
RUN npm i
RUN npm run build:prod

# start nginx server

FROM nginx:stable-alpine 
COPY --from=build /frontend/build /usr/share/nginx/html
COPY --from=build /frontend/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80   
CMD ["nginx", "-g", "daemon off;"]