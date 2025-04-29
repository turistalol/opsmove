# OPS-MOVE

## Sobre o Projeto
OPS-MOVE é uma aplicação web desenvolvida com Next.js para oferecer serviços de mobilidade. A plataforma conecta motoristas e passageiros, oferecendo uma interface moderna e responsiva.

## Tecnologias Utilizadas
- **Frontend**: Next.js 13.5, React 18, TypeScript
- **Estilização**: Tailwind CSS, Radix UI
- **Containerização**: Docker e Docker Compose
- **Deploy**: Configurado com Traefik para proxy reverso e HTTPS

## Estrutura do Projeto
O projeto segue a estrutura de diretórios padrão do Next.js App Router:
- `/app`: Rotas e páginas da aplicação
- `/components`: Componentes React reutilizáveis
- `/public`: Arquivos estáticos
- `/lib`: Utilitários e funções compartilhadas
- `/hooks`: React hooks personalizados

## Como Executar

### Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Usando Docker
```bash
# Construir e iniciar contêineres
docker-compose up -d
```

### Produção
```bash
# Construir para produção
npm run build

# Iniciar servidor de produção
npm start
```

## Configuração de Domínio
A aplicação está configurada para ser executada em:
- Domínio principal: opsmove.com.br
- Configurado para redirecionar www para não-www

## Licença
Todos os direitos reservados. 