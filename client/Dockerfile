# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build


# ---------- Production stage ----------
FROM nginx:alpine AS production

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
