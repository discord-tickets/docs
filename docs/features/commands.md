---
description: A detailed guide to all of the bot's commands
---

# Commands

!!! info "Symbols"
	:material-asterisk:{ .pink title="Required" } denotes a required option

	:material-headset:{ .orange title="Staff-only" } denotes a staff-only command or option

## Context menu commands

### Message

#### `Create a ticket from message`

#### `Pin message`

### User

#### :material-headset:{ .orange title="Staff-only" } `Create a ticket for user`

## Chat (slash) commands

### `/add`

Add a member to either a specific ticket or the ticket channel the command is used in.  

#### Options

|                          Name                          |                            Description                            |    Example    |
| :----------------------------------------------------: | :---------------------------------------------------------------: | :-----------: |
| :material-asterisk:{ .pink title="Required" } `member` |                  The member to add to the ticket                  | `@eartharoid` |
|                        `ticket`                        | The ticket to add the member to (defaults to the current channel) | `#ticket-91`  |

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
	
### `/remove`

Remove a member to either a specific ticket or the ticket channel the command is used in.  

#### Options

|                          Name                          |                            Description                               |    Example    |
| :----------------------------------------------------: | :------------------------------------------------------------------: | :-----------: |
| :material-asterisk:{ .pink title="Required" } `member` |                  The member to remove to the ticket                  | `@eartharoid` |
|                        `ticket`                        | The ticket to remove the member to (defaults to the current channel) | `#ticket-91`  |

??? example
	Remove the mentioned member to the ticket that the command is used in:
	``` title="Example 1"
	/remove member: @eartharoid
	```
	---
	Remove the mentioned member to the specified ticket:
	``` title="Example 2"
	/remove member: @eartharoid ticket: #ticket-91
	```

### `/priority`

Sets an emoji in front of the channel name to declare the tickets priority

#### Options

|                          Name                            |                            Description                            |    Example    |
| :------------------------------------------------------: | :---------------------------------------------------------------: | :-----------: |
| :material-asterisk:{ .pink title="Required" } `priority` |                  The priority to set		               |     `HIGH`    |

??? example
	Set the priority to high:
	``` title="Example 1"
	/priority priority: HIGH
	```
	---
	Set the priority to low:
	``` title="Example 2"
	/priority priority: LOW
	```
