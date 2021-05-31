# Tags

!!! note
	This page assumes your command prefix is `-`.

Tags ("canned responses") are pre-defined messages that can contain placeholders to make it easier to repeat information.

## Creating a tag

Download your guild's settings using the `-settings` command and add a tag:

```json hl_lines="2"
"tags": {
	"<tag_name>: "<tag_text>"
}
```

where:

- `<tag_name>` is a string **without spaces** (but can contain `:`, `_`, `-`, `.` etc)
- `<tag_text>` is the message text, which may contain [placeholders](#placeholders)

??? example
	```json
	"tags": {
		"ip": "Join at **`mc.left4craft.org`**.",
		"appeal/accepted": "Hello, <@{ticket.creator}>. Your appeal has been accepted because and your punishment will be revoked.",
		"appeal/rejected": "Hello, <@{ticket.creator}>. Your appeal has been rejected because **{:reason}**."
	}
	```
### Placeholders

#### `ticket` placeholders

!!! info
	A tag which uses any of these placeholders will be restricted to being used only in ticket channels.

??? summary "ticket"
	The `ticket` object is simply the data from the database row, most of them aren't very helpful, but here's the useful ones:

	- `{ticket.claimed_by}`: The ID of the staff member who has claimed the ticket, or `null`
	- `{ticket.creator}`: The ID of the ticket creator
	- `{ticket.first_response}`: Timestamp of when a staff member first responded, or `null`
	- `{ticket.last_message}`: Timestamp of the last message in the channel
	- `{ticket.number}`: The ticket number
	- `{ticket.topic}`: The ticket topic, or `null`
	- `{ticket.createdAt}`: Timestamp of when the ticket was created

??? example
	`Hello, <@{ticket.creator}>.` would result in:

	![(Image)](https://i.imgur.com/6671liT.png)

#### Argument placeholders

These are much more useful and allow you to input information.

Add a placeholder in your tag text:

```json
"Your appeal has been rejected because **{:reason}**."
```

The name of the placeholder is the name of the argument you need to provide when using the tag. **It MUST begin with a colon (`:`)**.

!!! tip
	**Note that it begins a colon!**
	The `{:name}` placeholder becomes the `--name` argument.

## Using a tag

Unless a tag uses ticket-specific placeholders, it can be used in any text channel.

If a tag does not have any placeholders, or only uses internal (`ticket`) placeholders, simply type:

`-tag <tag_name>`, or `-t <tag_name>`.

If you have custom placeholders:

!!! example
	- The tag:
		```json
		"tags": {
			"appeal/rejected": "Hello, <@{ticket.creator}>. Your appeal has been rejected because **{:reason}**."
		}
		```
	- Your message:
		```bash
		-t appeal/rejected
		--reason "you are stupid"
		```
	- The output:

		![(Image)](https://i.imgur.com/v5oyvJ9.png)


<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
