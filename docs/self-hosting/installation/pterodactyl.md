---
description: How to install Discord Tickets with Pterodactyl
---

# Pterodactyl

!!! warning
	**If you are going to host Discord Tickets with a third-party hosting provider** rather than on your own server:

	-  You are more likely to encounter rate limits due to sharing an IP address with other Discord bots.
	-  If the hosting provider does not offer a reverse proxy service,
		you won't be able to use a domain name with SSL/TLS,
		which is strongly recommended.


Discord Tickets can be run with Pterodactyl using a [generic Node.js egg](https://github.com/parkervcp/eggs/tree/master/generic/nodejs).

Note that although the bot may use under 100-150MB of RAM (depending on the server size etc),
**NPM may crash when installing dependencies if less than 500MB is allocated.**

## Installation

Start by creating a new Node.js v18 server.

!!! Installation Methods
     === "The Git Method (recommended)"
		1. Set the git repository to `https://github.com/discord-tickets/bot`
        2. Set the branch to the latest tag, e.g. `v4.0.0`. You can find the latest tag at the top right corner of this page or [here](https://github.com/discord-tickets/bot/releases/latest).
        3. Enable auto-updating so the startup script will download the code for you
        4. Change the file to `src/index.js`
        ![Screenshot](/img/pterodactyl-1.png)

	=== "Using the source code (use if Git doesn't work)"
		1. Download the latest source code from [here](https://github.com/discord-tickets/bot/releases/latest)
        2. Go to your Pterodactyl servers file manager and upload the file
        3. Click the three dots to the side of the file and extract it
        4. Go to the "Startup" section and change the "Main JS File" (may also be called "JS File" or something similar) to `src/index.js`

After starting the server for the first time, should see something like this.
Don't worry about the environment variable error yet.

![Screenshot](/img/pterodactyl-2.png)

## Environment variables

Go to the Files tab and open the `.env` file (start the server if it doesn't exist).

### Creating the Discord application

--8<-- "includes/discord-application.md"

### Database

If your host doesn't offer a MySQL/MariaDB database, set `DB_PROVIDER` to `sqlite`.

Otherwise, go to the Databases tab, create a new database, and copy the connection string.
If it starts with `jdbc:`, remove it.

```title="Example"
DB_CONNECTION_URL=mysql://u1533_nzSlNBSZvr:AryE.igrd7ULYQK8ANf%2Bw0V%5E@helsinki.dtickets.rocks:3306/s1533_tickets
DB_PROVIDER=mysql
```


### Web server

Find your server's port under "Address" on the Console page.

![Screenshot](/img/pterodactyl-3.png)

```title="Example"
HTTP_EXTERNAL=http://helsinki.dtickets.rocks:25500
HTTP_HOST=0.0.0.0
HTTP_PORT=25500
```

Or, if you are using a reverse proxy:

```title="Example"
HTTP_EXTERNAL=https://portal.dtickets.rocks
HTTP_HOST=0.0.0.0
HTTP_PORT=25500
```

### Other environment variables

The only other required non-default environment variables are `DB_PROVIDER`,
and `DB_CONNECTION_URL` if you are not using SQLite as your database.

--8<-- "includes/env.md"

## Publishing the commands

Start the server and wait until you see "Connected to Discord" in green.
Then type `commands publish` into the bot's console to publish the commands to Discord.

![Screenshot](/img/pterodactyl-4.png)

## Reverse proxy

If you have a domain name, you should [set up a reverse proxy](../reverse-proxy.md) with SSL/TLS
and set the `HTTP_TRUST_PROXY` environment variable to `#!yaml true`.

## Next steps

--8<-- "includes/configure.md"
