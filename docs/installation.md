# Installation

These instructions are for installing Discord Tickets on your own server. If you don't have a suitable place to host your bot, or you don't understand these instructions, see [Fully managed hosting](/hosting).

## Requirements

- A suitable server (a small VPS is fine)
- Node.JS >14.x (with NPM/PNPM/Yarn)
- A MySQL/MariaDB/PostgreSQL/MSSQL database is recommended

## Normal installation

1. Clone the repository
    1. `#!bash git clone https://github.com/discord-tickets/bot.git`
    2. Find the most recent version with `#!bash git describe --tags --abbrev=0`
    3. `#!bash git checkout tags/VERSION`, replacing `VERSION` with the version from step 2 (e.g. `v3.0.0`)
2. Install dependencies with `#!bash npm i --production`

### Running with docker

~~help me~~

## Pterodactyl installation

:egg: coming soon™️

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
