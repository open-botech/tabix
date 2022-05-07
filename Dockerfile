FROM node:16-slim
ADD . /app

WORKDIR /app

RUN yarn set version 3.1.1

RUN yarn install 

EXPOSE 9001 
    
CMD ["yarn", "start"]
