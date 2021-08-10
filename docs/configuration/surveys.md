# Surveys

!!! note
	This page assumes your command prefix is `-`.

Surveys allow members to review your support by answering a few questions when you close the ticket but right before the channel is deleted.

## Creating a Survey

Download your guild's settings using the `-settings` command and add a survey:

```json
"surveys": {
	"survey_name": []
}
```

where:

- `<survey_name>` is a string **without spaces** (but can contain `:`, `_`, `-`, `.` etc)

## Adding Questions to your Survey

All strings added to the array will be part of the survey in order.

??? example
	```
	"surveys": {
		"support": [
    			"How did we do today?",
    			"Did your support agent help you?"
   		]
	}
	```

## Viewing responses

To review responses to your survey, simply run the `-survey` command and include the surveys name to recieve an html file with all responses.

??? example
	`-survey support` and it will respond with an HTML file looking something like this:
	![(Image)](https://i.imgur.com/qqE4o5x.png)

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
