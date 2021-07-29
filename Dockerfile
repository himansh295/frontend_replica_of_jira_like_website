FROM ubuntu:14.04

FROM nginx:1.17.4

FROM node:latest


RUN mkdir /code
WORKDIR /code

COPY . /code/
RUN npm i

EXPOSE 1234
CMD npm star
