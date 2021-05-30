# Categories

!!! warning
	Once created, a category cannot be deleted.

To create a new category, [download your guild's settings](../guild-settings#downloading-current-settings), then add a new object in the `categories` array:

```json hl_lines="3-6"
{
	"categories": [
		{
			"name": "Support",
			"roles": ["513828182697312267"]
		}
	],
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

**The category `name` and `roles` array are required.**

Re-upload the settings as shown on the previous page. After the settings have been saved the bot will create a new category. Next time you download the settings, the category will have an `id` property.

??? success "Settings after downloading again"
	```json hl_lines="5"
	{
		"categories": [
			{
				"claiming": false,
				"id": "848614853555519499",
				"image": null,
				"max_per_member": 1,
				"name": "Support",
				"name_format": "ticket-{number}",
				"opening_message": "Hello {name}, thank you for creating a ticket. A member of staff will soon be available to assist you.\n\n__All messages in this channel are stored for future reference.__",
				"opening_questions": null,
				"ping": [],
				"require_topic": false,
				"roles": [
					"513828182697312267"
				],
				"survey": null
			}
		],
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

## Properties

??? summary "claiming"
	### claiming
	:octicons-checklist-24: Type: `Boolean`
	{: .details }

	:octicons-checklist-24: Default: `false`
	{: .details }

	Enable the staff ticket claiming feature? 

??? summary "id"
	### id
	:octicons-checklist-24: Type: `string`
	{: .details }

	The ID of the category.

	!!! warning
		Do **not** manually set this, it must exist in the database which means the bot needs to create the category itself.

??? summary "image"
	### image
	:octicons-checklist-24: Type: `string`
	{: .details }

	The URL of an image to send before the opening message of a ticket. [Here's some ideas.](https://imgur.com/a/CANbUGO)

??? summary "max_per_member"
	### max_per_member
	:octicons-checklist-24: Type: `number`
	{: .details }

	:octicons-checklist-24: Default: `1`
	{: .details }

	The maximum number of open tickets a member can have in this category.

???+ summary "name"
	### name
	:octicons-file-symlink-file-24: Required
	{: .details }

	:octicons-checklist-24: Type: `string`
	{: .details }

	The name of the category, used for the category channel name and multi-category reaction panels. 

??? summary "name_format"
	### name_format
	:octicons-checklist-24: Type: `string`
	{: .details }

	The channel name format.

	Placeholders:

	- `{number}` / `{num}`
	- `{username}` / `{name}`

??? summary "opening_message"
	### opening_message
	:octicons-checklist-24: Type: `string`
	{: .details }

	The message sent when the ticket is opened.

	Placeholders:

	- `{username}` / `{name}`
	- `{tag}` / `{ping}` / `{mention}`

??? summary "opening_questions"
	### opening_questions
	:octicons-checklist-24: Type: `Array<string>`
	{: .details }

	An array of questions to ask after the ticket has been opened.

??? summary "ping"
	### ping
	:octicons-checklist-24: Type: `Array<string>`
	{: .details }

	An array of **role** IDs to ping when the ticket is opened and can also include `"everyone"` and `"here"`. IDs must be in a string (surrounded by quotes).

??? summary "require_topic"
	### require_topic
	:octicons-checklist-24: Type: `Boolean`
	{: .details }

	:octicons-checklist-24: Default: `false`
	{: .details }

	Require the user to specify the ticket topic?

???+ summary "roles"
	### roles
	:octicons-file-symlink-file-24: Required
	{: .details }

	:octicons-checklist-24: Type: `Array<string>`
	{: .details }

	An array of staff **role** IDs to give access to the tickets. IDs must be in a string (surrounded by quotes).

??? summary "survey"
	### survey
	:octicons-checklist-24: Type: `string`
	{: .details }

	The name of the survey to use when the ticket is closed. Read the [surveys](../surveys) settings page.

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
