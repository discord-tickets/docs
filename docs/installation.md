# Installation

These instructions are for installing Discord Tickets on your own server. If you don't have a suitable place to host your bot, or you don't understand these instructions, see [Fully managed hosting](/hosting).

## Requirements

- A suitable server (a small VPS is fine)
- Node.JS >14.x (with NPM/PNPM/Yarn)
- At least `50MB` free RAM and disk space
- A MySQL/MariaDB/PostgreSQL/MSSQL database is recommended

## Standard installation

1. Clone the repository
    1. `#!bash git clone https://github.com/discord-tickets/bot.git`
    2. Find the most recent version with `#!bash git describe --tags --abbrev=0`
    3. `#!bash git checkout tags/VERSION`, replacing `VERSION` with the version from step 2 (e.g. `v3.0.0`)
2. Install dependencies with `#!bash npm i --production`

### Running with docker

~~help me~~

## Pterodactyl installation

For the best experience, import the [Discord Tickets egg](https://github.com/discord-tickets/bot/blob/main/pterodactyl.egg.json). If you are not an administrator and your host does not want to add this, the common "discord.js generic" and "node.js" eggs should also work.

If you are using the custom egg, simply create a new server using the egg. Set the `Version` to the latest version on [the releases page](https://github.com/discord-tickets/bot/releases/latest).

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->