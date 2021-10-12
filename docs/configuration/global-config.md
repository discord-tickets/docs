# Global config

!!! info
	You can skip this page if you are using [managed hosting](/managed).

The config file (`user/config.js`) can be used to configure settings that affect the entire bot (such as the user presence) and default settings. Changes to this file require a restart to take affect.


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
