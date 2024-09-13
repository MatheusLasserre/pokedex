FROM node:20-alpine
WORKDIR /api
COPY . .
RUN npm install --quiet --no-fund --loglevel=error --no-audit --no-update-notifier
RUN npm install -g @nestjs/cli -quiet --no-fund --loglevel=error --no-audit --no-update-notifier
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main"]