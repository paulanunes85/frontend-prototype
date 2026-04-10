# Multi-stage build: React + Vue → nginx
# This Dockerfile is auto-generated per prototype by Agent 5.

FROM node:20-alpine AS build-react
WORKDIR /app/react
COPY react/package*.json ./
RUN npm ci
COPY react/ ./
RUN npm run build

FROM node:20-alpine AS build-vue
WORKDIR /app/vue
COPY vue/package*.json ./
RUN npm ci
COPY vue/ ./
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-react /app/react/dist /usr/share/nginx/html/react
COPY --from=build-vue /app/vue/dist /usr/share/nginx/html/vue
COPY docs/ /usr/share/nginx/html/docs/
COPY public/index.html /usr/share/nginx/html/index.html

# Security: run as non-root user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid
USER nginx

EXPOSE 80
