FROM node:alpine

RUN apk update && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/community vips-tools vips-dev fftw-dev gcc g++ make libc6-compat && \
    apk add --no-cache bash git && \
    apk add python && \
    rm -rf /var/cache/apk/*

WORKDIR /app
RUN yarn global add gatsby-cli

# to prevent errors inside container
# use git with SSH instead of https
# git config --global url."https://github.com/".insteadOf "git@github.com:" && \

# source : https://medium.com/paperchain/fetching-private-github-repos-from-a-docker-container-273f25ec5a74

#RUN git config --global user.email "spam_box@some.edu"
#RUN git config --global user.name "spam_me"

EXPOSE 8000

WORKDIR blog

CMD ["gatsby", "develop", "-H", "0.0.0.0"]


