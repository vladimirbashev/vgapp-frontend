FROM node:20.14-alpine AS build
WORKDIR /dist/src/app
COPY . .
ENV CI=1
RUN npm ci
RUN npm run build --omit=dev


FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/frontend /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 8080
