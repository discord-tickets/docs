# Answers to common questions and issues

## `Privileged intent provided is not enabled or whitelisted`

??? help "Solution (click to expand)"
	Go to the [Discord developer portal](https://discord.com/developers/applications) and enable the server members intent.

	![(A picture highlighting the "Server Members Intent" being selected on the Discord Developer panel)](https://static.eartharoid.me/sharex/21/10/bHrSk381SG.png)
  
## `DiscordAPIError: Missing Access`

??? help "Solution (click to expand)"
	The bot needs permission to create application commands (although this bot only uses that for slash commands). Use the [invite URL generator](https://discordtickets.app/invite-url-generator/) and add the bot to your Discord server again.

## `Please install the package(s) for your selected database type: "mysql2"`

??? help "Solution for Standard installations (click to expand)"
	In the bot directory, type `npm i -P mysql2`, wait for it to complete then restart the bot.

??? help "Solution for Pterodactyl installations (click to expand)"
	**If you are using the Discord Tickets egg:**

	- Type `mysql2` under the `Plugins` field on the server startup page on your bots panel
	- Restart your bot/server
	- If the issue persists, ensure you are using the latest version of the egg

	**For other eggs:**

	- Locate a field on the server startup page for additional NPM/Node packages (we recommend using [this NodeJS egg](https://github.com/parkervcp/eggs/tree/master/bots/discord/discord.js) if you aren't already as it has this option)
	- Select the field, type `mysql2` and press enter on your keyboard
	- Restart your bot/server

??? help "Solution for PebbleHost installations (click to expand)"
	Go to the "Node Package Manager" page on the panel (it's on the sidebar on the left), click on the `Search` field under `Search npmjs`, type `mysql2`, click on `mysql` (don't pick any others) and click `Install` on the right.

## The `/panel` command is greyed out/is unavailable

??? help "Solution (click to expand)"
	Some commands will appear disabled at first as they are limited to staff members. To be classified as a staff member you need to:

	1. Have created at least one category (with `/settings categories create`)
	2. Have at least one role that is assigned to one or more categories (`roles`)

## What MySQL and/or MariaDB version(s) does Discord Tickets support?

??? help "Answer (click to expand)"
	The bot is not tested on some versions of these database software however we have tested and confirmed that version 8 of the MySQL Community Server and 10.8.3 of MariaDB work with Discord Tickets (MariaDB has only been tested with specifying the `DB_TYPE` in `.env` as `mysql`).
