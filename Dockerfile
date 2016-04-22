FROM node:5.4
RUN mkdir /code
ADD . /code
RUN (groupadd -g 1000 -r liberator && \
    useradd -u 1000 -r -m -g liberator liberator)
USER liberator
WORKDIR /code
