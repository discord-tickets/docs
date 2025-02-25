!!! warning
	Don't skip this section if you already know how to create a Discord application;
	Discord Tickets requires additional configuration.
	Using an existing application is not recommended.

1. Go to the [Discord Developer Portal :octicons-link-external-16:](https://discord.com/developers/applications){ target="_blank" rel="noopener external" }

2. Create an application

	1. Click the `New Application` button
	2. Give your application a name, accept the terms of service and click `Create`

	![Screenshot](/img/discord-application-1.png)
3. In the page that appears you can add a logo, description, or links to your terms of service and privacy policy if you wish to, and then click `Save Changes`.

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
6. Navigate to the `Bot` page

	1. Click `View Token`, then **copy the token and set it as your `DISCORD_TOKEN` environment variable.**
	2. Optionally, disable the "Public Bot" option to prevent other people from adding your bot to their servers. Before you can disable it go to to the `Installation` page and set `Install Link` to `None`. Save changes after which you disable the "Public Bot" in `Bot` page.

	![Screenshot](/img/discord-application-5.png)

	3. **Enable the `presence`, `server members` and `message content` intents.**

	![Screenshot](/img/discord-application-6.png)

Don't add the bot to your Discord server yet; you'll do that later.
