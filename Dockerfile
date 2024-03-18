# Dockerfile for Next.js application
FROM node:16.16.0 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Command to start Next.js app
CMD ["npm", "run", "dev"]
