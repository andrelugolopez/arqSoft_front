FROM node:16.14.0-alpine
WORKDIR /app-front
COPY ./package-lock.json .
COPY ./package.json .
RUN npm i
COPY . .
CMD ["npx","ng","serve","--host=0.0.0.0","--prod=true"]