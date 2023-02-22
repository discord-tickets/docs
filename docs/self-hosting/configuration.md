# Configuration

This page is about the global bot configuration.
For per-guild configuration, refer to the [Configuration](../configuration/index.md) page.

!!! info
	Changes to environment variables or the main configuration file require a restart to take effect.
	If you aren't using a panel or other daemonisation method to run the bot,
	type `exit` or press ++ctrl+c++ a couple of times to kill the process.

## Environment variables

In most cases, the environment variables can be set by editing the `.env` file (which the bot creates for you if you follow the installation instructions).

The installation guides also explain where to find most of the environment variable values.  

!!! warning
	Keep your environment variables safe, they should remain secret.

!!! example
	```bash title=".env"
	DB_CONNECTION_URL="mysql://bots:VerySecurePassword123@localhost/tickets0"
	DB_PROVIDER=mysql
	DISCORD_SECRET=rUpDU2T8K4ZXie8kdpzYsMTLbUhvmBRd
	DISCORD_TOKEN=ODcwOTg1TY0NjI0NODI2Mzc0.DNg0e0.UYVof7V1v0kRA0HHtGwXKA3UERxwANAZhQiA
	ENCRYPTION_KEY=445940dbed49eff55df56dd646fa1cb4b686df4cb9ac004a
	HTTP_EXTERNAL=https://tickets.example.com
	HTTP_HOST=0.0.0.0
	HTTP_PORT=8080
	HTTP_TRUST_PROXY=true
	OVERRIDE_ARCHIVE=
	PUBLIC_BOT=false
	SETTINGS_HOST=127.0.0.1
	SETTINGS_PORT=8169
	SUPER=319467558166069248
	```

### `DB_CONNECTION_URL`

<small>:octicons-question-16: Optional</small>

The MySQL or PostgreSQL database connection string.
If you are using SQLite, this is not required.

??? example
	=== "MySQL/MariaDB"
		```bash title=".env"
		DB_CONNECTION_URL="mysql://user:password@host:port/database"
		```
	=== "PostgreSQL"
		```bash title=".env"
		DB_CONNECTION_URL="postgresql://user:password@host:port/database"
		```
	=== "SQLite"
		```bash title=".env"
		DB_CONNECTION_URL=
		```

### `DB_PROVIDER`

The type of database the bot will use; one of:

- `mysql` (recommended, use this for MariaDB too)
- `postgresql`
- `sqlite`

### `DISCORD_SECRET`

Your Discord application's secret key, used for OAuth2.
Follow the [Creating your Discord application](discord-application.md) guide to find this. 

### `DISCORD_TOKEN`

Your Discord application's authentication token.
Follow the [Creating your Discord application](discord-application.md) guide to find this. 

### `ENCRYPTION_KEY`

The key used for encrypting data in the database and signing JWTs (authentication cookies).

This is usually generated for you automatically.
You can also run `npm run keygen` to generate a new key.

!!! danger
	**Keep this safe!**
	If someone manages to get access to your database (or a dump/backup) and they have the encryption key, your users' messages will be readable.
	Similarly, if you lose this key, you will need to completely reset the database.

### `HTTP_EXTERNAL`

<small>:material-factory: Default: `http://localhost:8080`</small>

The full external URL used to access the bot's API or settings panel.

??? example
	```bash title=".env"
	HTTP_EXTERNAL=http://tickets.example.com
	```

### `HTTP_HOST`

<small>:material-factory: Default: `0.0.0.0`</small>

The interface that the integrated web server will listen on. 

### `HTTP_PORT`

<small>:material-factory: Default: `8080`</small>

!!! inline end info "Info"
	Ports lower than 1024 may require running as root to bind to.

The port number that the integrated web server will bind to.

### `HTTP_TRUST_PROXY`

<small>:octicons-question-16: Optional</small>

<small>:material-factory: Default: `false`</small>

If you are running the bot behind a reverse proxy, set this to `true` (must be lowercase) to trust the `X-Forwarded-` headers.

### `OVERRIDE_ARCHIVE`

<small>:octicons-question-16: Optional</small>

When set to `false` (lowercase), guilds' `archive` setting will be ignored, disabling the archive feature for all guilds.

### `PUBLIC_BOT`

<small>:octicons-question-16: Optional</small>

<small>:material-factory: Default: `false`</small>

You should keep this as `false`.

### `SETTINGS_HOST`

<small>:material-factory: Default: `127.0.0.1`</small>

The interface that the second HTTP server (Express, for the settings panel app) will listen on. 

### `SETTINGS_PORT`

<small>:material-factory: Default: `8169`</small>

!!! inline end info "Info"
	Ports lower than 1024 may require running as root to bind to.

The port that Express will bind to.
Unlike the [`HTTP_BIND`](#http_bind) port, this doesn't need to be open as it is proxied through the main web server.

### `SUPER`

<small>:octicons-question-16: Optional</small>

<small>:material-factory: Default: `319467558166069248`</small>

A comma-separated list of Discord user IDs that have elevated privileges.
These users (typically the bot owners) are allowed to manage the settings of any guild, regardless of their roles or permissions in that guild.

!!! tip "Recommendation"
	If you keep the default (`319467558166069248`), I can help you without you needing to give me administrator permissions in your guild.
	You can also add your own ID:
	
	```bash title=".env"
	SUPERS=319467558166069248,youruseridhere
	```

## Main configuration file

The main configuration file is located at `user/config.yml`.
If it doesn't exist, run the bot and it will be generated for you.

!!! example
	```yaml title="user/config.yml"
    logs:
      files:
        directory: ./logs
        enabled: true
        keepFor: 30
      level: info
    presence:
      activities:
        - name: /new
        - name: with {totalTickets} tickets
        - name: "{openTickets} tickets"
          type: 3
        - name: "{avgResponseTime} response time"
          type: 3
      interval: 20
      status: online
    stats: true
    templates:
      transcript: transcript.md
	```

### `logs`

#### `files`

##### `directory`

<small>:material-factory: Default: `./logs`</small>

The directory to store log files in, if log file are enabled.

##### `enabled`

<small>:material-factory: Default: `true`</small>

If logs should be saved to files.
This is recommended but can be disabled if for example you are using a panel which already does this.

##### `keepFor`

<small>:material-factory: Default: `30`</small>

The number of days to keep log files for before deleting them (to save disk space), if log files are enabled. 

#### `level`

<small>:material-factory: Default: `info`</small>

The minimum log level that should be logged.

Must be one of:

- `debug`
- `verbose`
- `info` (recommended)
- `success`
- `warn`
- `notice`
- `error`
- `critical`

### `presence`

#### `activities` 

An array of activities (length must be at least 1).

##### `name`

The activity name, which may contain these placeholders:

- `{avgResolutionTime}`
- `{avgResponseTime}`
- `{openTickets}`
- `{totalTickets}`

##### `type`

<small>:octicons-question-16: Optional</small>

<small>:material-factory: Default: `0`</small>

The activity type (playing, watching etc).

Types: <https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType>.

#### `interval`

<small>:material-factory: Default: `20`</small>

The number of seconds to show each activity before rotating.

#### `status`

<small>:material-factory: Default: `online`</small>

The bot's status, one of:

- `online`
- `idle`
- `invisible`
- `dnd`

### `stats`

<small>:material-factory: Default: `true`</small>

If stats should be posted to the Discord Tickets StatsAPI.

[Terms of service](../terms.md) and [Privacy policy](../privacy.md) apply.

### `templates`

#### `transcript`

<small>:material-factory: Default: `transcript.md`</small>

The (partial) name of the file, relative to `user/templates`, that contains the [Mustache](https://mustache.github.io/) template for text transcripts.
The actual file must have the `.mustache` file extension appended to the end of this name (`transcript.md` --> `transcript.md.mustache`).

The generated transcript file's type/extension comes from the second dot-separated segment of the file name,
so if you want users to download ` .log` or `.txt` file instead of `.md`,
you would change this option to `transcript.txt` and rename the file to `transcript.txt.mustache`.

