# Docker installation

Before you start:

1. [Create your Discord bot application](/getting-your-bot-token)
2. [Add your bot to Discord](/invite-url-generator)


!!! info
	There is [a comunity guide](https://wiki.foxco-network.de/en/docker-portainer/install-discord-tickets-bot) for Portainer users.

[Docker](https://www.docker.com/) is a great tool that allows you to build out images and run containers for easy deployment. Make sure you have Docker installed on the machine you wish to deploy (or develop using [Docker Development Environments](https://docs.docker.com/desktop/dev-environments/)). 

Discord Tickets has it's own [Dockerfile](https://github.com/discord-tickets/bot/blob/main/Dockerfile) and [docker-compose file](https://github.com/discord-tickets/bot/blob/main/docker-compose.yml) that you can use to get started quickly without defining your own files. Here's how to build the Docker image:

```bash
docker build . -t "discordtickets"
```

!!! note
	You can name the image anything using the `-t` flag.

Now that you have the image built, you can see current images using:

```bash
docker image list
```

To start the Discord Tickets bot:

```bash
docker run -v ./logs:/usr/src/app/logs --name "bot" "discordtickets"
```

!!! note
	If you renamed your image, change the `discordtickets` at the end of the run command to the name of your image instead.

This command will run your image with a volume attached to `./logs` mapped to the container's log file, so that logs are persisted. We also give the container a friendly name, "bot".

If we want to stop the container:

```bash
docker stop bot
```

Or to completely kill the bot:

```bash
docker kill bot
```

To see logs:

```bash
docker logs bot -f
```

!!! note
	`-f` flag here means "follow", which will give you all logs and continue to until you exit with `ctrl-c`. 
