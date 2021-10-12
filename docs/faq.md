# Answers to FAQs and problems

## `Privileged intent provided is not enabled or whitelisted`

??? help "Solution"
	Go to the [Discord developer portal](https://discord.com/developers/applications) and enable the server members intent.

	![(Image)](https://static.eartharoid.me/sharex/21/10/bHrSk381SG.png)
  
## `DiscordAPIError: Missing Access`

??? help "Solution"
	The bot needs permission to create application (slash) commands. Use the [invite URL generator](https://discordtickets.app/invite-url-generator/) and add the bot to your Discord server again.

## `Please install the package(s) for your selected database type: "mysql2"`

??? help "Solution for Standard installations"
	In the bot directory, type `npm i -P mysql2` and restart the bot.

??? help "Solution for Pterodactyl installations"
	**If you are using the Discord Tickets egg:**

	- Add `mysql2` to the `Plugins` field on the server startup page
	- Restart your bot/server
	- If the issue persists, ensure you are using the latest version of the egg

	**For other eggs:**

	- Try to find a field on the server startup page for additional NPM/Node packages
	- Add `mysql2`

??? help "Solution for PebbleHost installations"
	Go to the "Node Package Manager" page in the control panel and install `mysql2`.

## The `/panel` command is greyed out

??? help "Solution"
	Some commands will appear disabled at first as they are limited to staff members. To be classified as a staff member you need to:

	1. Have created at least one category (with `/settings categories create`)
	2. Have at least one role that is assigned to one or more categories (`roles`)

## What MySQL version does Discord Tickets support?

??? help "Answer"
	The bot is not tested on various versions, however it should work on version 8 of the MySQL Community Server.