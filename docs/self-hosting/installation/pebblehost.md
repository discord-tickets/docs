---
description: How to install Discord Tickets on PebbleHost
---

# PebbleHost

!!! warning
	Due to sharing an IP address with other PebbleHost users (who may also be hosting a Discord bot),
	you are more likely to encounter rate limits. It should be fine,
	but you should consider other hosting options if you have a large guild and tickets are critical.

    Also, note that although it may be possible, running Discord Tickets alongside other bots
    in the same process is not recommended or supported. Consider getting a [VPS](../index.md#hosting-providers)
    if you want to run multiple bots.


## Installation

First, click on `Language & Preinstalls`, then `Bot Preinstalls`, select `Discord Tickets` and save.

![Screenshot](/img/pebblehost-1.png)

![Screenshot](/img/pebblehost-2.png)

Start the server to use the installer which will download the code for you.
When it has finished, start the server a second time to install the dependencies and generate the `.env` file.
It may take a few minutes to install.


## Environment variables

Go to the File Manager and open the `.env` file.

### Creating the Discord application

--8<-- "includes/discord-application.md"

### Database

From the sidebar, click `MySQL Database` and create a new database.
Open the details and click on the URI to copy it.

![Screenshot](/img/pebblehost-5.png)

![Screenshot](/img/pebblehost-6.png)

![Screenshot](/img/pebblehost-7.png)

```title="Example"
DB_CONNECTION_URL=mysql://customer_517462_tickets:CllM4ZOxSl@lrtZO@5By@eu01-sql.pebblehost.com/customer_517462_tickets
DB_PROVIDER=mysql
```


### Web server

From the sidebar, click `Additional Ports`, then `Add Port`. Copy the IP address and port number.

![Screenshot](/img/pebblehost-3.png)

![Screenshot](/img/pebblehost-4.png)

```title="Example"
HTTP_EXTERNAL=http://51.91.164.41:8025
HTTP_HOST=0.0.0.0
HTTP_PORT=8025
```

#### Reverse proxy

If you have a domain name, refer to [PebbleHost's guide](https://help.pebblehost.com/en/minecraft/how-to-setup-a-reverse-proxy) to enable the reverse proxy.
Set the `HTTP_TRUST_PROXY` environment variable to `#!yaml true` and change `HTTP_EXTERNAL` accordingly (e.g. `#!yaml https://tickets.example.com`).

### Other environment variables

Your `.env` file should now look something like this:

![Screenshot](/img/pebblehost-8.png)

--8<-- "includes/env.md"

## Publishing the commands

Start the server and wait until you see "Connected to Discord".
Then type `commands publish` into the bot's console to publish the commands to Discord.

![Screenshot](/img/pebblehost-9.png)

## Next steps

--8<-- "includes/configure.md"
