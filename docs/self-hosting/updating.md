# Updating

This guide is for updating between minor versions (e.g. 4.0 to 4.1).
If you are updating from the last major version (e.g. 3.x to 4.x), please refer to the [migration guide](https://blog.discordtickets.app/version-4-0/).

BACKUP, git fetch, checkout, npm install (migrate), check changelog instructions (config changes, etc.), restart, publish commands (links).

!!! example
	=== "SQLite"
		```bash linenums="1"
		mkdir ~/backup
		cp user/database.db{,-journal} ~/backup
		```

	=== "MySQL"
		```bash linenums="1"
		mysqldump -u <username> -p <database> | gzip > tickets.sql.gz
		```

	=== "PostgreSQL"
		```bash linenums="1"
		pg_dump -U <username> <database> | gzip > tickets.sql.gz
		```

## Docker

## Standalone

## Railway

## Pterodactyl

## PebbleHost