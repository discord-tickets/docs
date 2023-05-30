---
description: How to install Discord Tickets on Linux
---

# Standalone

!!! info ""
	This guide is written for Linux systems.
	The process is similar on Windows, but the commands may differ.
    Alternatively, you can install the bot on Windows with [Docker](./docker.md).

Before you start, you need to make sure your system meets [the requirements](../index.md#requirements).

If you don't have a suitable version of Node.js (you can check with `#!bash node -v`) and a database installed,
these community guides may help.

<div class="grid cards" markdown>

-   :fontawesome-brands-node-js:{ .lg .middle } __Node.js installation__

    ---

    How to install Node.js on various operating systems and distributions.

    [:octicons-arrow-right-24: DigitalOcean Community](https://www.digitalocean.com/community/tutorial_collections/how-to-install-node-js)

-   :simple-mysql:{ .lg .middle } __MySQL installation__

    ---

    How to install and securely set up MySQL on various Linux distributions.

    [:octicons-arrow-right-24: DigitalOcean Community](https://www.digitalocean.com/community/tutorial_collections/how-to-install-mysql)


</div>

## Installation

Start by cloning the most recent release from GitHub with the following command,
where `{==<tag>==}` is the name of the latest release tag,
which you can find at the top right corner of this page,
or on the [releases page](https://github.com/discord-tickets/bot/releases/latest).

By default, this will clone the repository into a folder called `bot`,
but you can change this by adding a folder name after the URL.

<div class="annotate" markdown>

``` linenums="0"
git clone --depth 1 --branch {==<tag>==}(1) https://github.com/discord-tickets/bot.git
```

</div>

1. Replace `{==<tag>==}` with the latest release tag name, e.g. `v4.0.0`

    !!! example
        ```bash linenums="0"
        git clone --depth 1 --branch v4.0.0 https://github.com/discord-tickets/bot.git tickets
        ```

---

!!! tip
    `pnpm` is a faster alternative to `npm`.
    You can install it with `#!bash npm i -g pnpm`, and then use `pnpm` instead of `npm`.

Next, install the dependencies with:

=== "npm"
    ```bash linenums="0"
    npm i --production
    ```
=== "pnpm"
    ```bash linenums="0"
    pnpm i --prod
    ```


NPM is configured to run scripts before and after installation.

- The pre-install script generates a random encryption key and then creates a `.env` file
- The post-install script prepares the database, but it won't do anything the first time as you need to tell it which database to use

## Environment variables

Using the `.env` file is the recommended way to set environment variables.

### Creating the Discord application

--8<-- "includes/discord-application.md"

### Other environment variables

The only other required non-default environment variables are `DB_PROVIDER`,
and `DB_CONNECTION_URL` if you are not using SQLite as your database.

--8<-- "includes/env.md"

After setting the required environment variables, run the post-install script again:

=== "npm"
    ```bash linenums="0"
    npm run postinstall
    ```
=== "pnpm"
    ```bash linenums="0"
    pnpm run postinstall
    ```

This will connect to the database (or create it if using SQLite) and apply migrations to create the tables according to the schema.
It will also generate the Prisma ORM client.

## Starting the bot

You can now start the bot with:

<div class="annotate" markdown>

```linenums="0"
node .(1)
```

</div>

1. You might have noticed that there isn't an `index.js` file at the root of the repository. 
    This command works because the `main` field in the `package.json` file is set to `src/`,
    so `node .` can be used to start Node.js with `src/index.js` as the entrypoint.

The first time you start the bot, it will copy the default configuration into `user/config.yml`.

If you want to customise your bot's status/activities, refer to the [configuration guide](../configuration.md#main-configuration-file).
You will need to restart the bot for the changes to take effect. (1)
{ .annotate }

1. Type `exit` or press ++ctrl+c++ to stop the process.

### Daemonising

Currently, the process will end when you close the terminal (or disconnect your SSH session). 
To run the bot in the background, you can turn it into a service with  `systemd`, `screen`, `pm2` etc.

#### PM2

[PM2](https://pm2.keymetrics.io/) is a process manager made for Node.js applications and is the easiest option.

Install PM2 and then start the bot with:

=== "npm"
    ```bash linenums="0"
    npm i -g pm2
    ```
=== "pnpm"
    ```bash linenums="0"
    pnpm add -g pm2
    ```

<div class="annotate" markdown>

```linenums="0"
pm2 start .(1)
```

</div>

1. You can give the process a custom name with the  `--name` flag.

    !!! example
        ```bash linenums="0"
        pm2 start .{++ --name tickets++}
        ```

Refer to the [PM2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start/) for more information.

## Publishing the commands

Type `commands publish` into the bot's console to publish the commands to Discord.

## Reverse proxy

If you have a domain name, you should [set up a reverse proxy](../reverse-proxy.md) with SSL/TLS
and set the `HTTP_TRUST_PROXY` environment variable to `#!yaml true`.

## Next steps

--8<-- "includes/configure.md"