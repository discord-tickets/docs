---
description: How to install Discord Tickets on Railway
---

# Railway

!!! warning
	Due to sharing an IP address with other Railway users (who are likely also hosting a Discord bot),
	you are more likely to encounter rate limits. It should be fine for testing or small servers,
	but you should consider other hosting options if you expect high usage.

	Railway is also very limiting in access, which may make it difficult to troubleshoot issues or update the bot.

## Pricing

Verified accounts(1) on Railway get $5 (or 500 hours) of usage per month for free.
Depending on usage, you may be able to run the bot for free if you don't have anything else running on your Railway account
but may cost up to $6 per month (\$1 after free usage).
{ .annotate }

1. If you don't have an existing, active GitHub account, you may need to add a payment method to verify your account.

## Deploying

Click the button below to deploy the bot on Railway.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/eB6TkX?referralCode=Z3aYd2){ target="_blank" }

### Environment variables

There are three environment variables that you need to set before deploying the bot.

??? abstract "Screenshot"
	![Screenshot](/img/railway-1.png)

#### Creating the Discord application

!!! info
	This content is shared between all of the installation guides.
	**Skip step 5 and come back to it later; Railway will give you a URL after you deploy the bot.**

--8<-- "includes/discord-application.md"

#### Other environment variables

The only other required environment variable that isn't set for you is `ENCRYPTION_KEY`.
Copy the value below and paste it into the `ENCRYPTION_KEY` field on Railway.

--8<-- "includes/encryption-key.html"

--8<-- "includes/env.md"

## Finding and changing the URL

Click on the `bot`(1) service, then `Settings`.
{ .annotate }

1. It may have a different name if you changed the name of your cloned repository. 

Here you can copy the default URL or change the subdomain to something less generic.
If you have one, you can also add a custom domain, which will look much better.

Go back to the Discord Developer Portal and add the URL as an allowed OAuth2 redirect URL.

??? abstract "Screenshot"
	![Screenshot](/img/railway-2.png)

## Publishing the commands

You can't interact with the bot's console on Railway, so commands are published automatically at startup.

## Next steps

--8<-- "includes/configure.md"