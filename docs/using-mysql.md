# Using MySQL

A MySQL database is recommended for improved performance and allowing you to have ticket transcripts/archives. SQLite is too slow to support storing messages.

!!! danger "WARNING" 

	For be sure to don't have Sequelize error on bot startup use the 'utf8_unicode_ci' collation for your database.

## Edit `.env`

1. Set `DB_TYPE` to `mysql`
2. Set the `DB_HOST` to the IP or hostname of your MySQL server
3. If your MySQL server is not running on the default port, also set the `DB_PORT`
4. Set the name of your database as `DB_NAME`
5. Set the username of your database user as `DB_USER`
5. Set the password of your database user as `DB_PASS`

## Install `mysql2`

### Standard and docker installations

```bash
npm i mysql2
```

### Pterodactyl installations

If you are using the Discord Tickets egg, add `mysql2` to the "Plugins" field in your server settings.
If you are using a generic egg, add `mysql2` to the additional node/npm packages field.

!!! info
	You can also try using `maria`, `postgres`, or `microsoft`, however only `sqlite` and `mysql` are officially supported. You are much more likely to encounter issues regarding the database if you use one of these unsupported databases.
