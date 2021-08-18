# Installation

These instructions are for installing Discord Tickets on your own server. If you don't have a suitable place to host your bot, or you don't understand these instructions, get [managed hosting](/hosting).

<!-- do not delete -->
--8<-- "includes/hosting-options.md"
<!-- /do not delete -->

## Requirements

- A suitable server (a small VPS is fine)
- [Git](https://git-scm.com/) (for installation)
- Node.JS >14.x (with NPM/PNPM/Yarn)
- At least `50MB` free RAM and `100MB` disk space
- A MySQL/MariaDB/PostgreSQL/MSSQL database is recommended

## Standard installation

1. Clone the repository
	1. 
		```bash
		git clone https://github.com/discord-tickets/bot.git
		```
	2. Find the most recent version with
		```bash
		git describe --tags --abbrev=0
		```
	3. Replacing `VERSION` with the version from step 2 (e.g. `v3.0.0`),
		```bash
		git checkout tags/VERSION
		```
2. Install dependencies with
	```bash
	npm i --production
	```
3. Start your bot once with
	```bash
	npm start
	```
	This will generate the `.env` and `config.js` files, along with a database encryption key which is stored in the `.env` file
4. Add your bot token in the `.env` file
5. Start your bot with
	```bash
	npm start
	```
6. You can stop the bot by pressing ++ctrl+c++

### Running with docker

Hopefully you know how to use the [Dockerfile](https://github.com/discord-tickets/bot/blob/main/Dockerfile) because I don't. If you know how to use docker compose, you can [contribute](https://github.com/discord-tickets/.github/blob/main/CONTRIBUTING.md) to include MySQL with Docker.

## Pterodactyl installation

For the best experience, import the [Discord Tickets egg](https://github.com/discord-tickets/bot/blob/main/pterodactyl.egg.json). If you are not an administrator and your host does not want to add this, the common "discord.js generic" and "node.js" eggs should also work.

If you are using the custom egg, simply create a new server using the egg. Set the `Version` to the latest version on [the releases page](https://github.com/discord-tickets/bot/releases/latest).

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->