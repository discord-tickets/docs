---
description: A detailed guide to all of the bot's commands
---

# Commands

!!! info "Symbols"
	- :octicons-alert-16:{ .orange title="Required" } denotes a required option

## `/add`

> :material-text-box: Add a member to a ticket

??? example
	Add the mentioned member to the ticket that the command is used in:
	``` title="Example 1"
	/add member: @eartharoid
	```
	---
	Add the mentioned member to the specified ticket:
	``` title="Example 2"
	/add member: @eartharoid ticket: #ticket-91
	```

### Options

|                           Name                           |                         Description                          |    Example    |
| :------------------------------------------------------: | :----------------------------------------------------------: | :-----------: |
| :octicons-alert-16:{ .orange title="Required" } `member` |               The member to add to the ticket                | `@eartharoid` |
|                         `ticket`                         | The ticket to add the member to. Defaults to current channel | `#ticket-91`  |
