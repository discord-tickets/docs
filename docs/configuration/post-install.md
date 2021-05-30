# Post-installation configuration

!!! info
	You can skip this page if you are using [managed hosting](/hosting).

Running the bot once after cloning the repository will create 2 new files: `.env` and `user/config.js`.

You **must** set your token in the `.env` file.

Other than setting the database details in the `.env` file, you don't need to do anything but create the database. **Tables will be created automatically.**

## .env

!!! danger
	**This file should be kept secret**. Do not share this file or push it to GitHub; keep your token and other secrets private.

??? summary "DISCORD_TOKEN"
	### DISCORD_TOKEN
	:octicons-file-symlink-file-24: Required
	{: .details }

	Your Discord bot's token. See [getting started](/getting-started#getting-your-bot-token) for instructions.

??? summary "DB_ENCRYPTION_KEY"
	### DB_ENCRYPTION_KEY
	:octicons-file-symlink-file-24: Required
	{: .details }

	This is automatically generated when you run the bot for the first time.

	!!! warning
		Keep this key safe or you will lose access to a lot of the data in the database.

??? summary "DB_TYPE"
	### DB_TYPE
	:octicons-file-symlink-file-24: Required
	{: .details }

	:octicons-checklist-24: Default: `sqlite`
	{: .details }

	The database type:

	- `sqlite` (default)
	- `mysql` (recommended)
	- `maria`
	- `postgres`
	- `microsoft`
	
	!!! warning
		Note that SQLite cannot handle fast writes and is not suitable if you want to use ticket archives or are using the bot in multiple guilds.

??? summary "DB_HOST"
	### DB_HOST
	:octicons-file-symlink-file-24: Not required for SQLite
	{: .details }

	The hostname for your database (a domain or IP address).

??? summary "DB_PORT"
	### DB_PORT
	{: .details }

	The port for your database.

??? summary "DB_NAME"
	### DB_NAME
	:octicons-file-symlink-file-24: Not required for SQLite
	{: .details }

	The database name

??? summary "DB_USER"
	### DB_USER
	:octicons-file-symlink-file-24: Not required for SQLite
	{: .details }

	The database user's username.

??? summary "DB_PASS"
	### DB_PASS
	:octicons-file-symlink-file-24: Not required for SQLite
	{: .details }

	The password for the database user.

??? summary "DB_TABLE_PREFIX"
	### DB_TABLE_PREFIX
	:octicons-file-symlink-file-24: Required
	{: .details }

	:octicons-checklist-24: Default: `dsctickets_`
	{: .details }

	The prefix for the database table names.

## config.js

All properties are required and not nullable.

??? summary "debug"
	### debug
	:octicons-checklist-24: Type: `Boolean`
	{: .details }

	:octicons-checklist-24: Default: `false`
	{: .details }

	Enable debug mode?

??? summary "defaults"
	### defaults
	:octicons-checklist-24: Type: `Object`
	{: .details }

	Default values for guild settings.

	??? summary "colour"
		#### colour
		:octicons-checklist-24: Type: [`ColorResolvable`](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable)
		{: .details }

		:octicons-checklist-24: Default: `#009999`
		{: .details }

		The default embed colour.

	??? summary "command_prefix"
		#### command_prefix
		:octicons-checklist-24: Type: `string`
		{: .details }

		:octicons-checklist-24: Default: `-`
		{: .details }

		The default prefix for commands.

	??? summary "log_messages"
		#### log_messages
		:octicons-checklist-24: Type: `Boolean`
		{: .details }

		:octicons-checklist-24: Default: `true`
		{: .details }

		Enable logging messages (ticket archives) by default? **You should disable this if using SQLite.**
	
	??? summary "name_format"
		#### name_format
		:octicons-checklist-24: Type: `string`
		{: .details }

		:octicons-checklist-24: Default: `ticket-{number}`
		{: .details }

		The default name format for ticket channels. See [categories configuration](/configuration/categories) for details.

	??? summary "opening_message"
		#### opening_message
		:octicons-checklist-24: Type: `string`
		{: .details }

		The default ticket opening message text. See [categories configuration](/configuration/categories) for details.

??? summary "locale"
	### locale
	:octicons-checklist-24: Type: `string`
	{: .details }

	:octicons-checklist-24: Default: `en-GB`
	{: .details }

	The global locale to use for commands (names and arguments etc). This is also the default guild locale.

	- [List of available locales](https://github.com/discord-tickets/bot/tree/main/src/locales)
	- [Help to translate](https://github.com/discord-tickets/.github/blob/main/CONTRIBUTING.md#translating)

??? summary "logs"
	### logs
	:octicons-checklist-24: Type: `Object`
	{: .details }

	??? summary "enabled"
		#### enabled
		:octicons-checklist-24: Type: `Boolean`
		{: .details }

		:octicons-checklist-24: Default: `true`
		{: .details }

		Enable log files?

	??? summary "keep_for"
		#### keep_for
		:octicons-checklist-24: Type: `number`
		{: .details }

		:octicons-checklist-24: Default: `30`
		{: .details }

		The number of days to keep log files for.

	??? summary "split"
		#### split
		:octicons-checklist-24: Type: `Boolean`
		{: .details }

		:octicons-checklist-24: Default: `true`
		{: .details }

		Split the logs into separate `stdout` and `stderr` files?

??? summary "max_listeners"
	### max_listeners
	:octicons-checklist-24: Type: `number`
	{: .details }

	:octicons-checklist-24: Default: `10`
	{: .details }

	The maximum number of event listeners for the same event before memory leak warnings begin.

??? summary "plugins"
	### plugins
	:octicons-checklist-24: Type: `Array<string>`
	{: .details }

	An array of plugins to load. The plugins must be manually installed with NPM. See [plugins](/plugins) for details.

??? summary "presence"
	### presence
	:octicons-checklist-24: Type: `Object`
	{: .details }

	??? summary "duration"
		#### duration
		:octicons-checklist-24: Type: `number`
		{: .details }

		:octicons-checklist-24: Default: `60`
		{: .details }

		The rotation time in seconds if there is more than one activity. Do not go below 15 seconds.

	??? summary "presences"
		#### presences
		:octicons-checklist-24: Type: `Array<Object>`
		{: .details }

		The rotation time in seconds if there is more than one presence. Do not go below 15 seconds.

		The object **must** have the `activity` and `type` properties and can optionally have the `status` and `url` properties.

		??? summary "activity"
			##### activity
			:octicons-file-symlink-file-24: Required
			{: .details }

			:octicons-checklist-24: Type: `string`
			{: .details }

			The activity name.

		??? summary "status"
			##### status
			:octicons-checklist-24: Type: `string`
			{: .details }

			:octicons-checklist-24: Default: `online`
			{: .details }

			One of:

			- `online`
			- `idle`
			- `invisible`
			- `dnd`

		??? summary "type"
			##### type
			:octicons-file-symlink-file-24: Required
			{: .details }

			:octicons-checklist-24: Type: `string`
			{: .details }

			The activity type, one of:

			- `PLAYING`
			- `STREAMING`
			- `LISTENING`
			- `WATCHING`
			- `COMPETING`

		??? summary "url"
			##### url
			:octicons-checklist-24: Type: `string`
			{: .details }

			If you set the `type` to `STREAMING`, you can set the `url` to a `https://twitch.tv` URL.

	??? summary "randomise"
		#### randomise
		:octicons-checklist-24: Type: `Boolean`
		{: .details }

		:octicons-checklist-24: Default: `true`
		{: .details }

		Randomise the order of the activities? 

??? summary "super_secret_setting"
	## super_secret_setting
	:octicons-checklist-24: Type: `Boolean`
	{: .details }

	:octicons-checklist-24: Default: `true`
	{: .details }

	Enable the sending of statistics?

??? summary "update_notice"
	## update_notice
	:octicons-checklist-24: Type: `Boolean`
	{: .details }

	:octicons-checklist-24: Default: `true`
	{: .details }

	Check for updates from GitHub's API on startup?

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
