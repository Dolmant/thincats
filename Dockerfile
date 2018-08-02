FROM golang AS build-env

COPY . ./src/github.com/Dolmant/thincats

RUN CGO_ENABLED=0 go build -o ./src/github.com/Dolmant/thincats/thincats ./src/github.com/Dolmant/thincats/...

FROM alpine
ADD ca-certificates.crt /etc/ssl/certs/
WORKDIR /
RUN mkdir /root/thincats
RUN mkdir /root/thincats/spa
RUN mkdir /root/thincats/spa/dist
RUN mkdir /root/thincats/spa/assets
COPY --from=build-env /go/src/github.com/Dolmant/thincats/thincats /root/thincats
COPY --from=build-env /go/src/github.com/Dolmant/thincats/spa/index.html /root/thincats/spa
COPY --from=build-env /go/src/github.com/Dolmant/thincats/spa/dist /root/thincats/spa/dist
COPY --from=build-env /go/src/github.com/Dolmant/thincats/spa/assets /root/thincats/spa/assets
COPY --from=build-env /go/src/github.com/Dolmant/thincats/thincats-c1f1e998f5d9.json /root/thincats/
ENV GOOGLE_APPLICATION_CREDENTIALS=/root/thincats/thincats-c1f1e998f5d9.json
ENTRYPOINT /root/thincats/thincats

# Document that the service listens on port 8079.
EXPOSE 8079
