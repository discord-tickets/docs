# Panels

!!! note
	This page assumes your command prefix is `-`.

Discord Tickets currently supports 3 types of panels, and button variants may be added in the future. You can create multiple panels.

The panel command uses [processed args](/commands/#processed-advanced):

- `--title`, `-t` (required)
- `--description`, `-d`
- `--emoji`, `-e` (multi)
- `--categories`, `-c` (required, multi)

The bot will create a new channel with the correct permissions and send the panel message in it.

## Single-category reaction

The most basic panel type - a single reaction per panel which opens a ticket in a specific category.

To create one, type:

```bash
-panel
-t "Panel title"
-d "Optional panel description"
-e <emoji>
-c <category>
```

where:

- `<emoji>` is either a unicode emoji character, or an emoji name (e.g. `:ticket:`)
- `<category>` is the ID of a category which exists in your guild's settings file.

??? example
	```bash
	-panel
	-t "Support"
	-d "React to this message with 🎫 to open a support ticket."
	-e 🎫
	-c 848614853555519499
	```

## Multi-category reaction

This panel type has multiple reactions and the user can select the category.

To create one, use the same command as before, but with more than one emoji-category pair:

```bash
-panel
-t "Panel title"
-d "Optional panel description"
-e <emoji>
-c <category>
-e <emoji>
-c <category>
```

where:

- `<emoji>` is either a unicode emoji character, or an emoji name (e.g. `:ticket:`)
- `<category>` is the ID of a category which exists in your guild's settings file.

You can have as many emoji-category pairs as you want but you need the same number of each. The order does not matter, the bot matches the first `-e` with the first `-c` etc.

??? example
	```bash
	-panel
	-t "Tickets"
	-d "React to this message to open a ticket."
	-e ❔
	-c 848614853555519499
	-e 📝
	-c 843239890593251329
	```

## Reaction-less

This panel type works with a single category per panel and is not recommended for categories which you expect to have sensitive/private topics, as the user's ticket topic will briefly be visible to other users. If your bot has low latency it is unlikely that someone would be able to read the message though.


To create one, use the same command as before, but specify only one category and omit emoji arguments.

```bash
-panel
-t "Panel title"
-d "Optional panel description"
-c <category>
```

where:

- `<category>` is the ID of a category which exists in your guild's settings file.


??? example
	```bash
	-panel
	-t "Support tickets"
	-d "Send a message in this channel with a brief summary of your issue to create a ticket."
	-c 843239890593251329
	```

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
