---
description: How to install Discord Tickets with Docker
---

# Docker

!!! info ""
    This guide is written for Linux systems.
    The process is similar on Windows, but the commands may differ.

Before you start, you need to make sure your system meets [the requirements](../index.md#requirements).

Unless you know what you're doing and already have a database and reverse proxy set up,
using the provided [`docker-compose.yml`](https://dl.discordtickets.app/bot/docker-compose.yml) file is recommended over [pure Docker](#pure-docker).

## Docker Compose

The default configuration contains two services:

- Discord Tickets
- MySQL

Start by making a directory(1) and downloading the [`docker-compose.yml`](https://dl.discordtickets.app/bot/docker-compose.yml) file from GitHub.
{ .annotate }

1. The name isn't important, but `tickets-bot` is used as an example in this guide.


```bash linenums="0"
mkdir tickets-bot && cd tickets-bot
```

=== "`wget`"
    ```bash linenums="0"
    wget https://dl.discordtickets.app/bot/docker-compose.yml
    ```
=== "`curl`"
    ```bash linenums="0"
    curl -O https://dl.discordtickets.app/bot/docker-compose.yml
    ```
=== "Other"
    <!-- jsdelivr forces download -->
    You can also [download the file](https://dl.discordtickets.app/bot/docker-compose.yml) in your browser.

### Environment variables

Open `docker-compose.yml` in your preferred text editor(1) and modify the highlighted lines.
{ .annotate }

1. <!---->
    ```bash linenums="0"
    nano docker-compose.yml
    ```

!!! bug
    The value of `HTTP_EXTERNAL` must be resolvable both from within the container and the host,
    which means when `HTTP_EXTERNAL` is an internal address (e.g. `http://127.0.0.1`), the container and host ports must be the same.
    This is because the SvelteKit application uses server-side rendering, so the bot makes HTTP requests to itself.
    Alternatively, you can set the `HTTP_INTERNAL` value with a different port.

    If you are using a reverse proxy and a domain name, this shouldn't be a problem.

--8<-- "includes/env.md"

<div class="annotate" markdown>


```yaml title="docker-compose.yml" hl_lines="14-15 19 37-40 42"
version: "3.9"

services:
  mysql:
    image: mysql:8
    restart: unless-stopped
    hostname: mysql
    networks:
      - discord-tickets
    volumes:
      - tickets-mysql:/var/lib/mysql
    environment:
      MYSQL_DATABASE: tickets
      MYSQL_PASSWORD: insecure # (1)!
      MYSQL_ROOT_PASSWORD: insecure # (2)!
      MYSQL_USER: tickets

  bot:
    image: eartharoid/discord-tickets:4.0 # (3)!
    depends_on:
      - mysql
    restart: unless-stopped
    hostname: bot
    networks:
      - discord-tickets
    ports:
      - 8169:8169
    volumes:
      - tickets-bot:/home/container/user
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    tty: true
    stdin_open: true
    # Please refer to the documentation:
    # https://discordtickets.app/self-hosting/configuration/#environment-variables
    environment:
      DB_CONNECTION_URL: mysql://tickets:insecure@mysql/tickets # (4)!
      DISCORD_SECRET: # (5)!
      DISCORD_TOKEN: # (6)!
      ENCRYPTION_KEY: # (7)!
      DB_PROVIDER: mysql
      HTTP_EXTERNAL: http://127.0.0.1:8169 # (8)!
      HTTP_HOST: 0.0.0.0
      HTTP_PORT: 8169
      HTTP_TRUST_PROXY: "false" # (9)!
      PUBLIC_BOT: "false"
      PUBLISH_COMMANDS: "false"
      OVERRIDE_ARCHIVE: null
      SUPER: 319467558166069248 # (10)!
      # TZ: Etc/UTC
      # (11)!
networks:
  discord-tickets:

volumes:
  tickets-mysql:
  tickets-bot:

```

</div>

1. Change the password for the database user to something secure.
    This isn't vital if you are not exposing the database to the network,
    but note that it can't be changed after the container is created.
2. Change the password for the root database user to something secure.
    This isn't vital if you are not exposing the database to the network,
    but note that it can't be changed after the container is created.
3. Make sure the image tag is the latest version.
    Discord Tickets follows semantic versioning, but not strictly, so pinning to a minor version is recommended.
    You can see all available tags on [Docker Hub](https://hub.docker.com/r/eartharoid/discord-tickets/tags).
4. Change `{==insecure==}` to the value of `MYSQL_PASSWORD`.
5. Refer to [Creating the Discord application](#creating-the-discord-application).
6. Refer to [Creating the Discord application](#creating-the-discord-application).
7. Copy the value from the [encryption key generator](#encryption-key) below.
8. Change this to your server's external IP address, or a domain name that points to it.
9. If you are using a reverse proxy, set this to `#!yaml true`.
10. You can add more users by separating them with commas (e.g. `#!yaml 319467558166069248,123456789012345678`)
11. If the container's timezone doesn't match the host (e.g. because it is a Windows host), you can uncomment and change the TZ variable.

#### Creating the Discord application

--8<-- "includes/discord-application.md"

#### Encryption key

Copy the value below and set it as the `ENCRYPTION_KEY` environment variable.

--8<-- "includes/encryption-key.html"

### Starting the bot

Start the containers:

```bash linenums="0"
docker compose up -d
```


### Publishing the commands

First, find the bot container's ID:

```bash linenums="0"
docker container ls
```


<div class="result" markdown>

```bash
CONTAINER ID   IMAGE                            COMMAND                  CREATED          STATUS          PORTS                            NAMES
{==318bb11719d9==}   eartharoid/discord-tickets:4.0   "/home/container/scripts/st…"   41 seconds ago   Up 37 seconds   80/tcp, 0.0.0.0:8080->8080/tcp   bot-bot-1
18a3ae0eb999   mysql:8                          "docker-entrypoint.s…"   41 seconds ago   Up 38 seconds   3306/tcp, 33060/tcp              bot-mysql-1
```

</div>

Then, attach to the container:

```bash linenums="0"
docker attach {==318bb11719d9==}
```

You can now interact with the bot's console and publish the commands to Discord:

```linenums="0"
commands publish
```

To disconnect from the container, press ++ctrl+p++ ++ctrl+q++.
If that doesn't work (e.g. if you using the terminal in VS Code), press ++ctrl+c++ instead (which will also restart the bot).

### Reverse proxy

If you have a domain name, you should [set up a reverse proxy](../reverse-proxy.md) with SSL/TLS
and set the `HTTP_TRUST_PROXY` environment variable to `#!yaml true`.

### Next steps

--8<-- "includes/configure.md"

## Pure Docker

!!! info ""
    This is a very short overview; refer to the [Docker Compose](#docker-compose) guide for more information.

Some required environment variables that you are unlikely to change have defaults set in the Dockerfile:

| Name            | Value              |
| --------------- | ------------------ |
| `HTTP_HOST`     | `#!yaml 0.0.0.0`   |
| `HTTP_PORT`     | `#!yaml 80`        |

You need to set the other required environment variables.

--8<-- "includes/env.md"

```bash title="Example"
docker run -itd \
  --name tickets \
  -p 8169:80 \
  -e DB_CONNECTION_URL="mysql://bots:VerySecurePassword123@localhost/tickets0" \
  -e DB_PROVIDER="mysql" \
  -e DISCORD_SECRET="rUpDU2T8K4ZXie8kdpzYsMTLbUhvmBRd" \
  -e DISCORD_TOKEN="ODcwOTg1TY0NjI0NODI2Mzc0.DNg0e0.UYVof7V1v0kRA0HHtGwXKA3URxwANAZhQiA" \
  -e ENCRYPTION_KEY="445940dbed49eff55df56dd646fa1cb4b686df4cb9ac004a" \
  -e HTTP_EXTERNAL="https://tickets.example.com" \
  -e HTTP_TRUST-PROXY="true" \
  eartharoid/discord-tickets:4.0
```

The first time you start the container, don't use the `-d` flag so you can type `commands publish` in the console to publish the commands to Discord.
You can then restart the container in detached mode.
Alternatively, set the `PUBLISH_COMMANDS` environment variable to `#!yaml true` to publish commands automatically at startup.
