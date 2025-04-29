# Dockerfile

# ---- Base ----
# Define a versão do Node.js a ser usada (uso a mesma versão do projeto)
ARG NODE_VERSION=18.17.0
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app

# ---- Dependencies ----
# Instala apenas as dependências de produção
FROM base AS deps
COPY package.json package-lock.json* ./
# Instala dependências
RUN npm ci --only=production

# ---- Builder ----
# Instala todas as dependências (incluindo devDependencies) e constrói o projeto
FROM base AS builder
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
# Instala todas as dependências para o build
RUN npm ci
# Executa o build do Next.js
RUN npm run build

# ---- Runner ----
# Cria a imagem final apenas com o necessário para rodar
FROM base AS runner
ENV NODE_ENV=production
# Copia os artefatos da build standalone
COPY --from=builder /app/.next/standalone ./
# Copia a pasta public
COPY --from=builder /app/public ./public
# Copia a pasta static (necessária com standalone)
COPY --from=builder /app/.next/static ./.next/static

# Expõe a porta que o Next.js usa (padrão 3000)
EXPOSE 3000

# Define o comando para iniciar a aplicação
# 'server.js' é o arquivo gerado pelo output: 'standalone'
CMD ["node", "server.js"] 