FROM node:22-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@12.3.4 --activate

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --no-frozen-lockfile

# Copy project files
COPY . .

ENV NODE_ENV=production
ENV PORT=3000

# Build Next.js
RUN pnpm build

EXPOSE 3000

# Start app
CMD ["pnpm", "start"]