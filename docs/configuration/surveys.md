# Surveys

!!! note
	This page assumes your command prefix is `-`.

Surveys allow members to review your support by answering a few questions right before you close the ticket.

## Creating a Survey

Download your guild's settings using the `-settings` command and add a survey:

```json hl_lines="2"
"surveys": {
	"survey_name": []
}
```

where:

- `<survey_name>` is a string **without spaces** (but can contain `:`, `_`, `-`, `.` etc)

## Adding Questions to your Survey

All strings added to the array will be part of the survey in order.

??? example
	```json hl_lines="5"
"surveys": {
	"survey_name": [
    "How did we do today?",
    "Did your support agent help you?"
   ]
}
```
!!! info Members have the option to skip the survey. They are not required to fill it out.

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
