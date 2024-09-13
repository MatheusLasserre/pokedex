FROM node:20
WORKDIR /app
COPY . .
RUN npm install --quiet --no-fund --loglevel=error --no-audit --no-update-notifier
RUN npm install -g @angular/cli --quiet --no-fund --loglevel=error --no-audit --no-update-notifier
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]