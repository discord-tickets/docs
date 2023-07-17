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

Railway doesn't really offer a first-party solution for backing up a database server. Instead, follow the guide for their workaround to export your database to an AWS S3 bucket at https://blog.railway.app/p/automated-postgresql-backups

## Pterodactyl

Standard Pterodactyl doesn't offer a first-party solution for exporting or downloading databases. If your server host has an option to duplicate or download/export your database, do that. If not, you'll need to access your server hosts phpMyAdmin page. Contact them directly if you need help with doing this as we can't really help with this.

## PebbleHost

This guide assumes you're using a Bot hosting plan from PebbleHost and not a dedicated server, VPS or other service.

1) Locate your service on the game panel and go to the MySQL Database tab

![1](https://github.com/discord-tickets/docs/assets/86845749/a7670b6c-229d-46b2-9bae-5cde1a74127d)

2) Click on "More information"

![2](https://github.com/discord-tickets/docs/assets/86845749/dcf5279e-5304-4057-8d29-d8ea9beb7018)

3) Click on the "Administration link", this will open a new tab in your browser, wait for that to load before proceeding

![3](https://github.com/discord-tickets/docs/assets/86845749/a6cf7000-cff8-478a-a2e9-66f8d0f53f1c)

4) Go to the "Databases" section

![4](https://github.com/discord-tickets/docs/assets/86845749/264cc0fa-a488-4b58-a664-26647921898e)

5) Select the databse you're using from the list

![5](https://github.com/discord-tickets/docs/assets/86845749/88315de1-e3cc-43d7-95dc-54df945852b2)

6) Click "Export"

![6](https://github.com/discord-tickets/docs/assets/86845749/1f936325-ad76-44f6-bd12-6db603da4bff)

7) Configure the settings how you like, then click "Go" and download the generated file

![7](https://github.com/discord-tickets/docs/assets/86845749/afd325fb-6f09-4de6-bb6d-67062ff8456e)

If you'd like to import your export again, do all steps up to 5 and instead click "Import". Pick a file and click "Go".
