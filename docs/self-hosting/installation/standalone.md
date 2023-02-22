---
description: How to install Discord Tickets on Linux
---

# Standalone

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
where `<tag>` is the name of the latest release tag,
which you can find at the top right corner of this page,
or on the [releases page](https://github.com/discord-tickets/bot/releases/latest).

By default, this will clone the repository into a folder called `bot`,
but you can change this by adding a folder name after the URL.

<div class="annotate" markdown>

```
git clone --depth 1 --branch <tag>(1) https://github.com/discord-tickets/bot.git
```

</div>

1. Replace `<tag_name>` with the latest release tag name, e.g. `v4.0.0`

    !!! example
        ```bash
        git clone --depth 1 --branch v4.0.0 https://github.com/discord-tickets/bot.git tickets
        ```

---

!!! tip
    `pnpm` is a faster alternative to `npm`.
    You can install it with `#!bash npm i -g pnpm`, and then use `pnpm` instead of `npm`.

Next, install the dependencies with:

```bash
npm i --production # or `pnpm i --prod`
```

NPM is configured to run scripts before and after installation.

- The pre-install script generates a random encryption key and then creates a `.env` file
- The post-install script prepares the database, but it won't do anything the first time as you need to tell it which database to use

---

--8<-- "includes/middle-click--inline.md"

Now you need to set the environment variables in the `.env` file.
Refer to the [configuration guide](../configuration.md) for more information, and **return to this page when you have finished.**

[Environment variables](../configuration.md#environment-variables){ .md-button .md-button--primary }

---

After setting the database-specific environment variables, run the post-install script again:

```bash
npm run postinstall # or `pnpm run postinstall`
```

<!--
once env is set, `node .`, pm2 etc
#main-configuration-file
-->