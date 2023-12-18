# How to setup

Copy .env.example to .env

```sh
cp .env.example .env
```

## Fill the variables

```
# string(development | test | production | staging), example: development
NODE_ENV=development

# number, example: 50001
PORT=50001

# string, example: rest-api-starter
API_NAME=rest-api-starter

# string, example: q1M7dW9XHBwtPxvKMzlmrw56Bn7MCg58Kjfb
API_TOKEN=api

# string, example: registry.server.pw/rest-api-starter
DOCKER_IMAGE=registry.server.pw/rest-api-starter

# string(en_US.UTF-8 | pt_BR.UTF-8 | ...), example: en_US.UTF-8
LANG=en_US.UTF-8

# string(UTC | America/Sao_Paulo | ...), example: UTC
TZ=UTC
```

## Run in development mode

```sh
yarn dev
```

## Open the api-docs and try the requests
