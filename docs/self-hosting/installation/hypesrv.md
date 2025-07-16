---
description: How to install Discord Tickets on HypeSrv
---

# HypeSrv

!!! warning
	Due to sharing an IP address with other HypeSrv users (who may also be hosting a Discord bot),
	you are more likely to encounter rate limits. It should be fine for most use-cases. You can request a dedicated IP-Address for your bot with our support team if you encounter issues.


## Installation

After purchasing your [Discord Bot Server](https://hypesrv.net/en/discord-bot-hosting?utm_source=discordtickets-docs), click on `Content Manager` in your Server Dashboard, then select `Discord Tickets Bot` and hit install.

![Screenshot](/img/hypesrv-1.png)

![Screenshot](/img/hypesrv-2.png)

!!! warning
    Installing Discord Tickets via the HypeSrv Content Manager will completely WIPE/DELETE all your server-files!

![Screenshot](/img/hypesrv-3.png)

The server will now automatically install Discord Tickets for you.
When it has finished, simply start the server to install the bot dependencies and generate the `.env` file.

It may take a few minutes to install completely.


## Configuration

You can configure your Discord Tickets Bot settings and environment variables via the `Advanced Settings` Tab in your Server Dashboard.

### Creating the Discord application

--8<-- "includes/discord-application.md"

### Set Bot Token and Secret

!!! important
If you do not set these variables, your discord bot won't be able to connect to discord and you won't be able to login to the Bot Web-Panel.


Make sure you enter the `Bot Token` and `Oauth Secret` from the discord developer dashboard in the `Discord Bot Token` and `Discord 0Auth2 Secret` fields in the `Advanced` Section of your Server Dashboard!

### Database (optional)

!!! info
    You only need to follow this section if you want to use MYSQL as the database backend for your bot.

From toolbar, select `Database` and create a new database.
Copy the connection details that are displayed and enter them in the `Database URL` field in the `Advanced` Section.
Make sure your `Database Provider` is set to mysql if you do this!

```title="Example Database URL"
mysql://<db_username>:<db_password>@db01.hysrv.eu/<db_name>
```


### Web server

Your server Port will be automatically routed to the Bot Web-Panel. You can simply visit the server URL in your browser.

#### Reverse proxy

If you have a domain name, feel free to setup your reverse proxy yourself or contact our support-team should you require assistance. Please understand that we can only offer limited support for external, customer managed deployments.

Set the `Trust proxies?` variable to `#!yaml true` in the `Advanced` Settings of your server and (optionally) change `HTTP_EXTERNAL` accordingly (e.g. `#!yaml https://tickets.example.com`).


## Publishing the commands

If using the `Content Manager` installation, your bot will automatically publish the commands by default.

If you still want to manually publish them you can do the following:

Start the server and wait until you see "Connected to Discord".
Then type `commands publish` into the bot's console to publish the commands to Discord.

## Next steps

--8<-- "includes/configure.md"
