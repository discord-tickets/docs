# Surveys

Surveys allow members to review your support by answering a few questions when you close the ticket but right before the channel is deleted.

## Download the surveys file

Type `tickets/surveys` and download the `surveys.json` file. The first time you do this it will be an empty JSON object:

```json
{}
```

## Creating a survey

```json
{
	"example_survey": [
		"Example question 1",
		"Example question 2"
	]
}
```

## Saving your changes

Upload the file to Discord with `tickets/surveys` as the message content:

![(Image)](https://static.eartharoid.me/sharex/21/09/DiscordPTB_PgvTItC9NU.png)



## Viewing responses

Use `/survey` to view responses.

??? example
	![(Image)](https://i.imgur.com/qqE4o5x.png)

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
