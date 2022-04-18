FROM keymetrics/pm2:latest-alpine

WORKDIR /app
COPY package.json .

RUN npm install && npm audit fix

COPY . .

EXPOSE 3000
CMD [ "pm2-runtime", "start", "ecosystem.config.js"]
