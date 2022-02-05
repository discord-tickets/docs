# Standard installation

<!-- do not delete -->
--8<-- "includes/hosting-options.md"
<!-- /do not delete -->

This is the most simple way to install Discord Tickets.

## Requirements

To install Discord Tickets you need a suitable server (VPS or dedicated server) with:

- At least `100MB` RAM and `150MB` disk space available
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) v16 and NPM
- A MySQL database *(recommended)*
- Basic sysadmin experience (get [managed hosting](/managed) if you don't)

If you don't have a server, see [hosting providers](/getting-started#hosting-providers).

## Installation

You should download the bot using Git to make updating easier in the future. 

1. Clone the repository
	```bash
	git clone https://github.com/discord-tickets/bot.git .
	```
2. Find the most recent version with
	```bash
	git describe --tags --abbrev=0
	```
3. Switch to a stable version with
	```bash
	git checkout tags/VERSION
	```
	after replacing `VERSION` with the version from step 2 (e.g. `git checkout tags/v3.1.0`)
4. Install dependencies and generate your database encryption key with
	```bash
	npm i --production && npm start
	```
5. [Create your Discord bot application](/getting-your-bot-token)
6. Copy the bot token from the previous step into `.env`, after `DISCORD_TOKEN=`
7. For improved performance and to allow messages to be stored (so you can have ticket transcripts), optionally [configure the bot to use MySQL](/using-mysql).
8. [Add your bot to Discord](/invite-url-generator)
9. Start the bot with `npm start`. You can stop it with ++ctrl+c++
10. [Configure](/configuration/categories/) your bot
11. Complete [this survey](https://forms.office.com/r/LE1UbheBTm) *(please :slight_smile:)*

!!! note
	Note that you may need to use `systemd`, `screen`, or `pm2` to keep the bot running in the background.

!!! note
	The . under 1. can be used to clone to the current directory...
