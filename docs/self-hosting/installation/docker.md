---
description: How to install Discord Tickets with Docker
---

# Docker

!!! info ""
	This guide is written for Linux systems. 
	The process is similar on Windows, but the commands may differ.

Before you start, you need to make sure your system meets [the requirements](../index.md#requirements).

Unless you already have a database and reverse proxy set up, using the provided [`docker-compose.yml`](https://dl.discordtickets.app/bot/docker-compose.yml) file is recommended over pure Docker.

## Docker Compose

The default docker-compose file contains two services:

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

1. 
	!!! example
		```bash linenums="0"
		nano docker-compose.yml
		```

--8<-- "includes/env.md"

<div class="annotate" markdown>


```yaml title="docker-compose.yml" hl_lines="14-15 19 33-36 38"
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
    image: discord-tickets:4.0 # (3)!
    depends_on:
      - mysql
    restart: unless-stopped
    hostname: bot
    networks:
      - discord-tickets
    ports:
      - 8080:80
    volumes:
      - tickets-bot:/usr/bot/user
    # Please refer to the documentation:
    # https://discordtickets.app/self-hosting/configuration/#environment-variables
    environment:
      DB_CONNECTION_URL: mysql://tickets:insecure@mysql/tickets # (4)!
      DISCORD_SECRET: # (5)!
      DISCORD_TOKEN: # (6)!
      ENCRYPTION_KEY: # (7)!
      DB_PROVIDER: mysql
      HTTP_EXTERNAL: http://127.0.0.1:8080 # (8)!
      HTTP_HOST: 0.0.0.0
      HTTP_PORT: 80
      HTTP_TRUST_PROXY: false # (9)!
      PUBLIC_BOT: false
      OVERRIDE_ARCHIVE: null
      SETTINGS_PORT: 8169
      SETTINGS_HOST: 127.0.0.1
      SUPER: !!str 319467558166069248 # (10)!

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

#### Creating the Discord application

--8<-- "includes/discord-application.md"

#### Encryption key

Copy the value below and set it as the `ENCRYPTION_KEY` environment variable.

--8<-- "includes/encryption-key.html"

### Starting the bot


### Publishing the commands

docker attach

### Reverse proxy

## Pure Docker

!!! info ""
	This is a very short overview; refer to the [Docker Compose](#docker-compose) guide for more information.

Some required environment variables that you are unlikely to change have defaults set in the Dockerfile:

| Name            | Value     |
| --------------- | --------- |
| `HTTP_HOST`     | 0.0.0.0   |
| `HTTP_PORT`     | 80        |
| `SETTINGS_HOST` | 127.0.0.1 |
| `SETTINGS_PORT` | 8169      |

You need to set the other required environment variables.

--8<-- "includes/env.md"

```bash title="Example"
docker run -itd \
  --name tickets \
  -p 8080:8080 \
  -e DB_CONNECTION_URL="mysql://bots:VerySecurePassword123@localhost/tickets0" \
  -e DB_PROVIDER="mysql" \
  -e DISCORD_SECRET="rUpDU2T8K4ZXie8kdpzYsMTLbUhvmBRd" \
  -e DISCORD_TOKEN="ODcwOTg1TY0NjI0NODI2Mzc0.DNg0e0.UYVof7V1v0kRA0HHtGwXKA3UERxwANAZhQiA" \
  -e ENCRYPTION_KEY="445940dbed49eff55df56dd646fa1cb4b686df4cb9ac004a" \
  -e HTTP_EXTERNAL="https://tickets.example.com" \
  -v ~/tickets-storage:/usr/bots/user \
  discord-tickets
```

The first time you start the container, don't use the `-d` flag and type `commands publish` in the console to publish the commands to Discord.
You can then restart the container in detached mode.