# Changelog

<!--
	NOTE: MOST RECENT SHOULD BE AT THE TOP!
-->

## v3.1.4 (2021-10-26)

Minor improvements.

- Fixed deferring interaction responses

## v3.1.3 (2021-10-26)

Minor improvements.

- Defer interaction responses to prevent interactions failing
- Changed the `settings` command array parsing

## v3.1.2 (2021-10-07)

Major and minor bug fixes.

- **SECURITY:** Fixed anyone being able to close any ticket
- Fixed errors with `tag` command
- Fixed setting `opening_questions`
- Fixed new lines in opening messages and panel descriptions
- Fixed surveys using reactions instead of buttons
- Fixed creating multi-category panels when you're not using an English locale *(although it was the Discord client's fault)*

## v3.1.1 (2021-09-25)

Minor bug fixes.

- Fixed pterodactyl egg
- Fixed error when opening a ticket and both ticket claiming and the close button are disabled
- Fixed error when using `/tag` command with no subcommand


## v3.1.0 (2021-09-24)

v3.1 replaces reactions and classic commands with buttons and slash commands.

- Replaced reactions with message components
- Replaced classic commands with slash commands
- Added `image` and `thumbnail` options for panels
- Added ticket `close_button` option in guild settings 
- Fixed closing tickets when the creator has left

## v3.0.0 (2021-05-30)

Months overdue (started in February), v3 brings a complete rewrite with a lot more code of much higher quality.

New features include:

- Multi-guild support
- Multiple ticket categories per guild
- Multiple support roles per category
- Multiple panels, with 2 new panel types (multi-category, and reaction-less)
- Localisation
- Opening questions separate to the opening message
- Tags
- Surveys

<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
