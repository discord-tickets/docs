# Guild settings

!!! note
	This page assumes your command prefix is `-`.

Discord Tickets doesn't have a fancy web panel for configuring yet, so you'll need to edit JSON. Do this on your PC in a suitable editor ([VSCode](https://code.visualstudio.com/) or similar, or even [Notepad++](https://notepad-plus-plus.org/), but **not** Windows Notepad).

## Downloading current settings

Editing the settings is simple but slightly tedious. To modify your guild's settings you first need to download the current settings. To do this:

1. Type `-settings` in a channel that the bot and read and send messages in
2. Save the file to your computer.

![(Image)](https://i.imgur.com/gdCWio8.png)

You can now modify the settings.

The default settings:

```json
{
  "categories": [],
  "colour": "#009999",
  "command_prefix": "-",
  "error_colour": "RED",
  "footer": "Discord Tickets by eartharoid",
  "locale": "en-GB",
  "log_messages": true,
  "success_colour": "GREEN",
  "surveys": {},
  "tags": {}
}
```

!!! info
	You must add at least one [category](./categories).

## Modifying the settings

!!! warning
	You **must** re-download your settings if you created a category the last time you updated the settings. This is because the bot creates a new category if any of the category objects in the settings file do not have an `id` property. The categories in the updated settings file will have an `id`.

After making your changes, you can re-upload the file with `-settings` as the message content:

![(Image)](https://i.imgur.com/DhcG49z.png)

??? summary "categories"
	### categories
	Read the [categories](../categories) settings page.

??? summary "colour"
	### colour
	:octicons-checklist-24: Type: [`ColorResolvable`](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable)
	{: .details }

	The primary colour for embeds.

??? summary "command_prefix"
	### command_prefix
	:octicons-checklist-24: Type: `string`
	{: .details }

	The prefix for commands.

??? summary "error_colour"
	### error_colour
	:octicons-checklist-24: Type: [`ColorResolvable`](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable)
	{: .details }

	The error colour for embeds.

??? summary "footer"
	### footer
	:octicons-checklist-24: Type: `string`
	{: .details }

	The footer text for embeds.

??? summary "locale"
	### locale
	:octicons-checklist-24: Type: `string`
	{: .details }

	The locale to use for responses.

	- [List of available locales](https://github.com/discord-tickets/bot/tree/main/src/locales)
	- [Help to translate](https://github.com/discord-tickets/.github/blob/main/CONTRIBUTING.md#translating)

??? summary "log_messages"
	### log_messages
	:octicons-checklist-24: Type: `Boolean`
	{: .details }

	Enable ticket archives? If enabled, messages sent in tickets and related data will be stored in the database.

	!!! warning
		**Disable this option if you are using SQLite.** SQLite cannot handle the write speeds required for this to work. Use MySQL or another database server if you want ticket archives.

??? summary "success_colour"
	### success_colour
	:octicons-checklist-24: Type: [`ColorResolvable`](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable)
	{: .details }

	The success colour for embeds.

??? summary "surveys"
	### surveys
	Read the [surveys](../surveys) settings page.

??? summary "tags"
	### tags
	Read the [tags](../tags) settings page.

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
