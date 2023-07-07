---
tags:
  - Archives
---

# General settings

## Options

### Auto close after

<small>
:material-factory: Default: `#!yaml 12h`
</small>

When provided, tickets pending closure will be automatically closed after the specified time.
Tickets are pending closure when:

- A close request is sent (with [`/close`](../features/commands.md#close) or the close button), it is not rejected (ignored or not seen), and fewer than 5 messages are sent afterwards.
- A ticket is marked as stale after being inactive for longer than the [*Stale after*](#stale-after) time.

When paired with the [*Stale after*](#stale-after) option, tickets will be automatically closed when `lastMessageAt + stalerAfter + autoCloseAfter > now`.

Must be a [ms](https://github.com/vercel/ms#readme)-parsable format (`18h`, `2 days`, `1w`, etc).

### Auto tag channels

<small>
:material-factory: Default: `#!yaml Specific channels (none)`
</small>

Every (non-bot) message sent in the selected channels will be matched against tag regular expressions.
The first tag that matches, if any, will be triggered, sending the tag content in reply to the message.

### Archive

<small>
:material-factory: Default: `#!yaml true`
</small>

When enabled, messages (including author data) are stored in the database for future reference. Avatars and attachments are also saved.

Please read the [privacy notice](../privacy.md) for more information.

### Blocklist

Members with any of the selected roles will be blocked from creating tickets and logging in to the portal.

### Buttons

#### Claim

<small>
:material-factory: Default: `#!yaml false`
</small>

When enabled **and** claiming is enabled in the category, a claim/release button will be added to the opening message of tickets.

#### Close

<small>
:material-factory: Default: `#!yaml false`
</small>

When enabled, a close button will be added to the opening message of tickets.

### Error colour

<small>
:material-factory: Default: `#!yaml Red`
</small>

The [colour](https://old.discordjs.dev/#/docs/discord.js/main/typedef/ColorResolvable) to use in embeds for error messages.

### Footer

The text to use in embed footers.

### Locale

The locale (language) the bot will use for all messages. Note that this does not affect which language users see commands in.

### Log channel

When provided, a message will be sent to this channel when:

- Settings are created, updated, or deleted.
- Tickets are created, closed, claimed, released, or updated
- Messages (only in ticket channels) are edited or deleted

### Primary colour

<small>
:material-factory: Default: `#!yaml #009999`
</small>

The [colour](https://old.discordjs.dev/#/docs/discord.js/main/typedef/ColorResolvable) to use in embeds for most messages.

### Stale after

When provided, tickets that are inactive for this amount of time will be marked as stale.
This sends a message warning participants to resume the conversation.

This option can be paired with the [*Auto close after*](#auto-close-after) option to automatically close tickets after a period of inactivity.

Must be a [ms](https://github.com/vercel/ms#readme)-parsable format (`18h`, `2 days`, `1w`, etc).

### Success colour

<small>
:material-factory: Default: `#!yaml Green`
</small>

The [colour](https://old.discordjs.dev/#/docs/discord.js/main/typedef/ColorResolvable) to use in embeds for success messages.

### Working hours

<small>
:octicons-alert-16: Required
</small>

All fields are required, but by default, all hours are considered working hours, effectively disabling this feature.
If a ticket is sent outside of the day's working hours, a message will be sent to notify the creator that staff may not be immediately available.
