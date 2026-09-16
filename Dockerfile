# ---------- Base Image ----------
FROM node:22-alpine AS base

# Enable pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@12.3.4 --activate

WORKDIR /app

# ---------- Dependencies ----------
FROM base AS deps

COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# ---------- Build ----------
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
RUN pnpm build

# ---------- Production ----------
FROM node:22-alpine AS runner

RUN corepack enable && corepack prepare pnpm@12.3.4 --activate

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only required files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./

EXPOSE 3000

CMD ["pnpm", "start"]