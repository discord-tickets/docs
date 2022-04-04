# Commands

Arguments in `<>` are required, arguments in `[]` are optional.

All commands are accurate as of version `3.1.3`, original version made by eartharoid and improved by RooRay.

- `/add <user> [ticket]` - Adds someone to a ticket, can be run by anyone with access to the ticket.
	- `<user>` - The person to add, supports User Mention or User ID.
	- `[ticket]` - The ticket to add the specified person to, if none is specified, the person will be added to the ticket channel the command was used in.
- `/blacklist show` - Shows all people and roles that are blacklisted from opening tickets.
- `/blacklist add <member_or_role>` - Adds the specified user or role to the blacklist.
	- `<member_or_role>` - The person or role to add to the blacklist, supports User ID, User Mention, Role Mention or Role ID.
- `/blacklist remove <member_or_role>` - Removes the specified user or role from the blacklist.
	- `<member_or_role>` - The person or role to remove from the blacklist, supports User ID, User Mention, Role Mention or Role ID.
- `/close [reason] [ticket] [time]` - Close a ticket, can be run by anyone with access to the ticket.
	- `[reason]` - Adds a reason for closing the ticket.
	- `[ticket]` - The ticket to be closed, if none is specified the ticket the command is ran in will be closed.
	- `[time]` - Closes all tickets that have been inactive for the specified amount of time.
- `/help` - Lists all the commands you can use.
- `/new [topic]` - Creates a new ticket.
	- `[topic]` - Adds a topic to the ticket, which will appear in the channel topic and the opening message from the bot.
- `/panel <categories> [description] [image] [just_type] [title] [thumbnail]` - Makes a new ticket panel (menu to open tickets from the bot).
	- `<categories>` - The category/categories that the panel will let you open tickets in, must be comma-separated category IDs (e.g. 012345, 67890, 09876)
	- `[description]` - Adds a description to the panel embed.
	- `[image]` - Adds an image to the panel embed, must be a URL.
	- `[just_type]` - Creates a "just type" panel, which is a category where any message sent will automatically open a ticket with the message as the topic, answer is a boolean (true or false).
	- `[title]` - Adds a title to the panel embed.
	- `[thumbnail]` - Adds a thumbnail to the panel embed, like an image but smaller and is locked to the top right of the embed, must be a URL.
- `/remove <member>` - Removes a member from the ticket the command is ran in.
	- `<member>` - The member to remove from the ticket, can be a User Mention or User ID.
- `/settings set [close_button] [colour] [error_colour] [footer] [locale] [log_messages] [success_colour]` - Sets bot-wide settings
	- `[close_button]` - Whether or not the bot has a close button on the opening message, answer is a boolean (true or false).
	- `[colour]` - The colour the bot will use on the side of all non-error or success-related embeds.
	- `[error_colour]` - The colour the bot will use on the side of the embed when an error occurs.
	- `[footer]` - The footer that will appear in all of the bots' messages
	- `[locale]` - The language the bot will use, options are all locale options in the `src/locales` folder.
	- `[log_messages]` - Whether or not the bot will log messages, answer is a boolean (true or false).
	- `[success_colour]` - The colour the bot will use on the side of the embed when a command is successfully executed.
- `/settings categories list` - Lists all categories with their category IDs.
- `/settings categories create <name> <roles>` - Creates a category with the specified name and roles as staff.
	- `<name>` - The name of the category created.
	- `<roles>` - A comma-separated list (e.g. 012345, 67890, 09876) of Role IDs that will be considered "staff" in that category (add your support/staff people here)
- `/settings categories delete <id>` - Deletes the specified category.
	- `<id>` - The category ID of the category you want to delete.
- `/settings categories edit <id> [claiming] [image] [max_per_member] [name] [name_format] [opening_message] [opening_questions] [ping] [require_topic] [roles] [survey]`
	- `<id>`- The category ID of the category you want to apply the changes to.
	- `[claiming]` - Whether or not ticket claiming is enabled, answer is a boolean (true or false).
	- `[image]` - An image URL to be used in the embed of the opening message sent by the bot when a ticket is opened in the category.
	- `[max_per_member]` - How many tickets can be opened by one person in the category.
	- `[name]` - Change the name of the category to the specified name.
	- `[name_format]` - The naming convention used by the bot for that category (e.g. if it was called `help` the bot would name the ticket channels opened in the order `help-1`, `help-2`, `help-3` etc).
	- `[opening_message]` - The opening message used by the bot in the embed it sends when a ticket is opened in the category.
	- `[opening_questions]` - Questions the bot asks the ticket opener when the ticket is opened in the category.
	- `[ping]` - A comma-separated list of role IDs for the bot to ping when a ticket is opened in the category (e.g. 012345, 67890, 09876).
	- `[require_topic]` - Require all tickets that get opened to have a topic, answer is a boolean (true or false).
	- `[roles]` A comma-separated list of "staff" role IDs (add support/staff roles (e.g 012345, 67890, 09876)).
	- `[survey]` - The survey the bot sends the ticket opener after the ticket is closed.
- `/stats` - Displays ticket stats (number of tickets opened, average response time and number of messages).
- `/survey <survey>` - View responses of the specified survey.
	- `<survey>` - The name of the survey to view the responses of.
- `/tag` - Use a tag response (basically a premade reply).
- `/topic <new_topic>` - Change the topic of the ticket.
	- `<new_topic>` - The topic that the ticket will be changed to.

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
