FROM node:18
WORKDIR /app

COPY package*.json ./

# Install all dependencies
RUN npm install

COPY . .

CMD ["npm", "start"]