# ---------- Dependencies ----------
FROM node:20-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


# ---------- Production ----------
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./
COPY server.js ./
COPY models ./models
COPY routes ./routes
COPY upload.js ./

RUN mkdir -p public/images

EXPOSE 5000

USER node

CMD ["node", "server.js"]
