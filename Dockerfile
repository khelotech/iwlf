FROM node:22

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@12.3.4 --activate

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --no-frozen-lockfile

COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]