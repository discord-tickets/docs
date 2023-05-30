!!! warning
	Don't skip this section if you already know how to create a Discord application;
	Discord Tickets requires additional configuration.
	Using an existing application is not recommended.

1. Go to the [Discord Developer Portal :octicons-link-external-16:](https://discord.com/developers/applications){ target="_blank" rel="noopener external" }

2. Create an application

	1. Click the `New Application` button
	2. Give your application a name, accept the terms of service and click `Create`

	![Screenshot](/img/discord-application-1.png)
3. Add a logo, description, and links to your terms of service and privacy policy, then click `Save Changes`.

	![Screenshot](/img/discord-application-2.png)
4. Go to the `OAuth2` page and click `Reset Secret`, then `Yes, do it!`.
	**Copy the new secret and set it as your `DISCORD_SECRET` environment variable.**

	![Screenshot](/img/discord-application-3.png)
5. Click `Add Redirect` and enter the value of your `HTTP_EXTERNAL` environment variable, followed by `/auth/callback`.
	Then click `Save Changes`.

	!!! example "Examples"
		- `http://12.345.67.89:8080/auth/callback`
		- `https://tickets.example.com/auth/callback`

    If you set this to `https://tickets.example.com/auth/callback`,
    your `HTTP_EXTERNAL` environment variable must be set to `https://tickets.example.com` *(without a trailing `/`)*.

	![Screenshot](/img/discord-application-4.png)
6. Create the bot user

	1. Go to the `Bot` page and click `Add Bot`, then `Yes, do it!`
	2. Click `View Token`, then **copy the token and set it as your `DISCORD_TOKEN` environment variable.**

	![Screenshot](/img/discord-application-5.png)
7. Configure the bot

	1. Optionally, disable the "public bot" option to prevent other people from adding your bot to their servers.
	2. **Enable the `presence`, `server members` and `message content` intents.**

	![Screenshot](/img/discord-application-6.png)

Don't add the bot to your Discord server yet; you'll do that later.
