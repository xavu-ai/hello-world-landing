# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Runtime
FROM node:20-alpine AS runtime
WORKDIR /app

# Non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeapp -u 1001

COPY --from=builder /app/node_modules ./node_modules
COPY --chown=nodeapp:nodejs . .

USER nodeapp
EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "src/index.js"]
