# Updating

1. Fetch tags with `#!bash git fetch --all --tags`
2. Find the most recent version with `#!bash git describe --tags --abbrev=0`
3. `#!bash git checkout tags/VERSION`, replacing `VERSION` with the version from step 2 (e.g. `v3.0.0`)
4. `#!bash npm i --production`
5. Check the [releases](https://github.com/discord-tickets/bot/releases) page for further instructions (large updates may require upgrading tasks)

!!! info
	If you are using the Pterodactyl egg, all you need to do is change the `Version` variable and restart your Pterodactyl server. You may still need to perform upgrading tasks. Check the [releases](https://github.com/discord-tickets/bot/releases) page for further instructions
