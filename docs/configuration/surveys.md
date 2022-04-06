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

![image](https://user-images.githubusercontent.com/86845749/162047498-8c18ba27-a61a-49c8-b5ca-7bd3255f6ba5.png)



## Viewing responses

Use `/survey` to view responses.

??? example
	![(Image)](https://i.imgur.com/qqE4o5x.png)

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
