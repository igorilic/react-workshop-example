# STAGE: build

FROM node:6.11-alpine as builder
COPY package.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm i && mkdir /react-app && cp -R ./node_modules ./react-app

WORKDIR /react-app

COPY . .

RUN npm run build

# STAGE: setup
FROM nginx:1.13.3-alpine

COPY nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /react-app/dist /usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]
