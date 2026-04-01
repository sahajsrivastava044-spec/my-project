# Stage 1
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .


# Stage 2
FROM node:18-alpine AS runner

RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

WORKDIR /home/appuser/app

COPY --from=builder --chown=appuser:appgroup /app ./

USER appuser

EXPOSE 3000

CMD ["node", "app.js"]   # change if needed