---
path: '/run-oauth2-server-open-source-api-security'
title: >
  Run your own OAuth 2.0 Server

metaDescription: >
  Learn how to run your own OAuth 2.0 and OpenID Connect server using open
  source technology only.

metaTitle: >
  Run your own open source OAuth2 server - step by step guide

publishedAt: '2019-08-29'
author: 'Aeneas Rekkas'
overline: >
  API Security

category: Tutorial
subtitle: >
  Become an OAuth2 and OpenID Connect provider using secure and scalable open
  source technology.

teaser:
  In this guide, you will set up a hardened, fully functional OAuth 2.0 (OAuth2)
  server. It will take you about ~15 minutes. We will use ORY Hydra (open
  source), a security-first OAuth2 and OpenID Connect server written in Golang.
---

In this guide you will set up a hardened, fully functional OAuth 2.0 (OAuth2)
server. It will take you about ~15 minutes. This guide is for you, if you are
looking to do something like in the gif on the right, or more specifically:

- You want to use OAuth2 for API security.
- You want to open up your API to third party developers like
  [Dropbox](https://www.dropbox.com/developers), or
  [GitHub](https://developer.github.com/v3/).
- You want to become an identity provider like
  [Google](https://developers.google.com/identity/) ,
  [Facebook](https://developers.facebook.com/docs/facebook-login) , or
  [Twitter](https://dev.twitter.com/web/sign-in).
- You need to federate (delegate) authentication or authorization.

We will use [ORY Hydra](https://github.com/ory/hydra) (open source), a
security-first OAuth2 and OpenID Connect server written in Golang.

<p>
<figure>
  <img src="/images/articles/oauth2/oauth2-flow.gif" alt="GitHub OAuth 2.0 visual flow" />
  <figcaption>
    What OAuth 2.0 looks like in the wild: CircleCI performs
    API calls to GitHub on your behalf.
  </figcaption>
</figure>
</p>

### This is how ORY Hydra works

We originally built ORY Hydra because all other OAuth2 servers imposed their
user management on us. But we had a user management in place already, and did
not want to migrate away from it.

ORY Hydra defines a consent flow which let's you implement the bridge between
ORY Hydra and your user management easily using only a few lines of code. If you
want, you could say that ORY Hydra translates the user information you provide
to OAuth2 Access Tokens and OpenID Connect ID Tokens, which are then reusable
across all your applications (web app, mobile app, CRM, Mail, ...) and also by
third-party developers.

### Sounds good, let's go!

You're hooked? Great! Let's start by downloading some docker images. By the way,
this tutorial relies heavily on docker. If you haven't already, please install
docker now.

_Sidenote:_ Please be aware that this tutorial is making extensive use of
Docker. As such, this tutorial assumes that you have some knowledge of how
Docker works.

## Preparations

Before we head into it, you need to make sure that there are no conflicts with
existing docker containers or other open ports. Please make sure that ports
`9000, 9001, 9010, 9020` are open.

```shell
$ sudo netstat -tuplen | grep '9000\|9001\|9010\|9020'
# On windows, use the following command:
# netstat -an | findstr /r "9000 9001 9010 9020"
```

If the result of the command lists open ports, you must kill the command that
listens on that port first. Next you should check if any existing ORY Hydra
Docker container is running. If there is one, you should kill that Docker
container.

```shell
$ docker ps | grep 'hydra'
# On windows, use the following command:
# docker ps | findstr "hydra"
```

## Create a Network

Before we can start, a network must be created which we will attach all our
Docker containers to. That way, the containers can talk to one another.

```shell
$ docker network create hydraguide
```

## Install and run PostgreSQL

This docker command starts postgres container `ory-hydra-example--postgres` and
sets up a database called `hydra` with user `hydra` and password `secret`.

By the way, some code listings use `\` at the end of the line.
[Shells like bash concatenate these to one line.](https://superuser.com/questions/508507/linux-bash-script-single-command-but-multiple-lines)

```shell
$ docker run --network hydraguide \
  --name ory-hydra-example--postgres \
  -e POSTGRES_USER=hydra \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=hydra \
  -d postgres:9.6
```

By the way, don't deploy databases using docker in production. It will make your
life miserable. Use a managed solution like
[Amazon RDS](https://aws.amazon.com/de/rds/) or
[Google Cloud SQL](https://cloud.google.com/sql/docs/). Even small instances
will be able to serve a lot of traffic, check out some of the
[benchmarks](https://www.ory.sh/docs/guides/master/performance/1-hydra).

## Configure the environment

The **system secret** is used to **encrypt data at rest**, and to **sign tokens
and authorize codes**. Once a database is initialized with a system secret, you
always need to use that secret to access the database.

```shell
# The system secret can only be set against a fresh database. This
# secret is used to encrypt the database and needs to be set to the same value every time the process (re-)starts.
# You can use /dev/urandom to generate a secret. But make sure that the secret must be the same anytime you define it.
# You could, for example, store the value somewhere.
$ export SECRETS_SYSTEM=$(export LC_CTYPE=C; cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
#
# Alternatively you can obviously just set a secret:
# $ export SECRETS_SYSTEM=this_needs_to_be_the_same_always_and_also_very_$3cuR3-._
```

### Database

The database url must point to the postgres container we created above. The
database will be used to persist and query data. **ORY Hydra prevents data
leaks** as only token signatures are stored in the database. For a valid token,
both payload and signature are required.

```shell
$ export DSN=postgres://hydra:secret@ory-hydra-example--postgres:5432/hydra?sslmode=disable
```

### Initialize the database

Next, the database needs to be initialized. This can be achieved with
`hydra migrate sql`. Here we pull the latest docker image for ORY Hydra and run
a container that executes the migrate command.

```shell
$ docker run -it --rm \
  --network hydraguide \
  oryd/hydra:v1.0.0 \
  migrate sql --yes $DSN
```

To prevent bad things from happening, SQL migrations are never run without you
explicitly telling them to. This is the case for new and existing databases.

## Run the OAuth2 server

Besides setting the system secret (`SECRETS_SYSTEM` ), the database url (`DSN`
), the public url (`URLS_SELF_ISSUER`) of the server, the user login endpoint (
`URLS_LOGIN`) and the user consent endpoint (`URLS_CONSENT`) are passed using
environment variables.

Both **user login and consent urls** point to one or two web service(s) which
will be explained and set up in the next sections. For now, you can think of it
as connecting ORY Hydra to your identity management (user registration, profile
management, user login ,...)).

For the sake of simplicity, we will force ORY Hydra to run HTTP instead of
HTTPS. Also, please, use more secure values in production.

You may have noticed that there are two exposed ports, 9000 and 9001. The former
(9000) serves API requests coming from the public internet (e.g. `/oauth2/auth`,
`/oauth2/token`) while the latter (9001) serves administrative API requests
which should not be available to the public internet, unless you intentionally
decide to expose them.

```shell
$ docker run -d \
  --name ory-hydra-example--hydra \
  --network hydraguide \
  -p 9000:4444 \
  -p 9001:4445 \
  -e SECRETS_SYSTEM=$SECRETS_SYSTEM \
  -e DSN=$DSN \
  -e URLS_SELF_ISSUER=http://127.0.0.1:9000/ \
  -e URLS_CONSENT=http://127.0.0.1:9020/consent \
  -e URLS_LOGIN=http://127.0.0.1:9020/login \
  oryd/hydra:v1.0.0 serve all --dangerous-force-http
```

### Is it alive?

This is easy to answer, just check the docker logs! Or,
[open the health check](http://127.0.0.1:9001/health/ready) , which should show
you ok.

```shell
$ docker logs ory-hydra-example--hydra

[...]

time="2017-06-29T21:26:34Z" level=info msg="Setting up http server on :4444"
```

### Get help

ORY Hydra can be managed using the Hydra Command Line Interface (CLI), which is
using ORY Hydra's REST APIs. To see the available commands, run the `help`
command.

```shell
$ docker run --rm -it \
  oryd/hydra:v1.0.0 \
  help
```

## Performing the OAuth 2.0 Client Credentials Flow

### Create an OAuth 2.0 Client

```shell
$ docker run --rm -it \
  --network hydraguide \
  oryd/hydra:v1.0.0 \
  clients create \
    --endpoint http://ory-hydra-example--hydra:4445 \
    --id some-consumer \
    --secret some-secret \
    --grant-types client_credentials \
    --response-types token,code
```

Great! Our infrastructure is all set up! Next it's time to perform the OAuth 2.0
Client Credentials Flow. For that to work you have to createn an OAuth 2.0
Client that is able to perform this flow. For that purpose, you can use the ORY
Hydra CLI.

We are passing several flags to the command, for example
`--grant-types client_credentials` which allows the client to perform the OAuth
2.0 Client Credentials grant.

### Issue an access token

```shell
$ docker run --rm -it \
  --network hydraguide \
  oryd/hydra:v1.0.0 \
  token client \
    --client-id some-consumer \
    --client-secret some-secret \
    --endpoint http://ory-hydra-example--hydra:4444

ZcE0YWqnxemENLyJrjjlAHlFkdwaHB6TzkSi0c289HI.GQmXJsAYcw5de97S6mqOL0yB2UyFEf4DiXEM05vdfdY
```

The ORY Hydra CLI offers a method (`hydra token client`) which performs the
OAuth 2.0 Client Credentials flow. Let's use the newly created client to perform
this flow!

The result will be an OAuth 2.0 access token which we will validate in the next
step.

### Validate the access token

```shell
$ docker run --rm -it \
  --network hydraguide \
  oryd/hydra:v1.0.0 \
  token introspect \
    --client-id some-consumer \
    --client-secret some-secret \
    --endpoint http://ory-hydra-example--hydra:4445 \
    >INSERT-TOKEN-HERE<

{
        "active": true,
        "client_id": "some-consumer",
        "exp": 1528901511,
        "iat": 1528897911,
        "iss": "http://127.0.0.1:9000/",
        "sub": "facebook-photo-backup",
        "token_type": "access_token"
}
```

Using `hydra token introspect` it is possible to validate an access token, and
receive it's payload. ORY Hydra uses opaque tokens to greatly reduce attack
vectors. You can set arbitrary data in the token, if you want. For more
information on this head over to the
[developer guide](https://www.ory.sh/docs/guides/master/hydra/).

You can validate access tokens using the OAuth 2.0 Introspection API,
standardized as
[IETF OAuth 2.0 Token Introspection](https://tools.ietf.org/html/rfc7662).

Please make sure to replace `>INSERT-TOKEN-HERE<` with the token you just
received.

## The user login & consent flow

ORY Hydra is not an
[Identity Management](https://en.wikipedia.org/wiki/Identity_management)
solution. Instead it uses your existing Identity Management which reduces
adoption complexity. OAuth2 providers such as Keycloak, OpenAM, or
IdentityServer are usually full-stack enterprise identity and access management
solutions. They come with complex deployment dependencies, technologies not
particularly suited for cloud native environments, and subtle, but annoying
limitations at scale. ORY Hydra solves OAuth2 and OpenID Connect only, but it
solves it well and extemely scalable.

To authenticate users, ORY Hydra defines the
[user login & consent flow](docs/guides/latest/hydra/3-overview/1-oauth2#authenticating-users-and-requesting-consent).
You can find an
[exemplary user login and consent application on our GitHub](https://github.com/ory/hydra-login-consent-node).

`youtube:https://www.youtube.com/embed/txUmfORzu8Y`

### Run the user login & consent app

For the sake of simplicity, we will use the already available
[user login and consent](https://github.com/ory/hydra-login-consent-node)
example app. It emulates a Identity Management application (it has only one
user) and integrates with ORY Hydra's User Login & Consent Flow.

```shell
$ docker run -d \
  --name ory-hydra-example--consent \
  -p 9020:3000 \
  --network hydraguide \
  -e HYDRA_ADMIN_URL=http://ory-hydra-example--hydra:4445 \
  -e NODE_TLS_REJECT_UNAUTHORIZED=0 \
  oryd/hydra-login-consent-node:v1.0.0
```

## OAuth2 + OpenID Connect Authorize Flow

### Create OAuth2 Consumer App

Awesome, the infrastructure is now set up! To perform the OAuth 2.0 and OpenID
Connect flow, an OAuth 2.0 Client (consumer app) is required.

The client must be able to request the `authorize_code` grant, scope `openid`
and `offline`, and response types `token`, `code`, and `id_token`.

```shell
$ docker run --rm -it \
  --network hydraguide \
  oryd/hydra:v1.0.0 \
  clients create \
    --endpoint http://ory-hydra-example--hydra:4445 \
    --id another-consumer \
    --secret consumer-secret \
    -g authorization_code,refresh_token \
    -r token,code,id_token \
    --scope openid,offline \
    --callbacks http://127.0.0.1:9010/callback

Client ID: another-consumer
Client Secret: consumer-secret
```

### Perform OAuth 2.0 Authorize Code Flow

To initialize an OAuth 2.0 authorize code flow, use the `hydra token user`
command. It will generate the authorization url which the user must open in the
browser. Requesting the authorization is the first step of the OAuth 2.0
authorize code flow.

Requesting OAuth 2.0 Access and Refresh tokens is usually done using a library
for your programming language. Do not write this on your own. Here are some
libraries for different languages: [Golang](https://github.com/golang/oauth2),
[NodeJS](https://github.com/lelylan/simple-oauth2),
[PHP](https://github.com/thephpleague/oauth2-client).

```shell
$ docker run --rm -it \
  --network hydraguide \
  -p 9010:9010 \
  oryd/hydra:v1.0.0 \
  token user \
    --port 9010 \
    --auth-url http://127.0.0.1:9000/oauth2/auth \
    --token-url http://ory-hydra-example--hydra:4444/oauth2/token \
    --client-id another-consumer \
    --client-secret consumer-secret \
    --scope openid,offline \
    --redirect http://127.0.0.1:9010/callback

Setting up home route on http://127.0.0.1:9010/
Setting up callback listener on http://127.0.0.1:4445/callback
Press ctrl + c on Linux / Windows or cmd + c on OSX to end the process.
If your browser does not open automatically, navigate to:

        http://127.0.0.1:9010/
```

### Login & Consent

Open [http://127.0.0.1:9010/](http://127.0.0.1:9010/) in your browser and you
will see a simple screen asking you to authorize the application. If you
remember the CircleCI example from the beginning of the article, this would be
the "Log In with GitHub" button.

![Consent App showing the login screen](/images/articles/oauth2/consent-1.png)

After clicking "Authorize application" you will be asked to log in. The screen
you are seeing is provided by the exemplary User Login & Consent app
("ory-hydra-example--consent"). The contents of these screens are under your
control and you can use any technology you like to implement them. As already
noted, the exemplary application has just one user. In a real-world scenario,
you could probably sign up for a new account or use a social login provider
(e.g. Google, Facebook) to sign in.

![Consent App showing the login screen](/images/articles/oauth2/consent-2.png)

The consent screen is the second important screen shown by the User Login &
Consent app. It asks the end user which permissions to authorize. If a user has
privacy concerns, he/she could not grant access to personal details. Since our
example only requests very basic permissions, you should grant them all.

![Consent App asking the user to grant the requested scopes to the application](/images/articles/oauth2/consent-3.png)

Once logged in and authorized, ORY Hydra will issue an access, a refresh (if
scope `offline` was granted), and an ID token (if scope `openid` was granted).

## You made it!

That's it, you have a running OAuth2 server with an exemplary identity provider,
and performed an OAuth2 request! You can use the token from the last request and
pass it to `hydra token introspect` as we did earlier with the OAuth 2.0 Client
Credentials flow.

ORY Hydra is an Apache 2.0 licensed Go server solving OAuth 2.0, OpenID Connect
and API security in general. It secures millions of requests per day and has a
vibrant and welcoming online community.

Check out [ORY Hydra at Github](https://github.com/ory/hydra) and our other
[API Security](https://www.ory.sh/) products.