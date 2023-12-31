FROM node:lts-alpine as build
WORKDIR /app/
COPY . /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
