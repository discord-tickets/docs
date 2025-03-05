# Tags

## Options

### Name

<small>
:octicons-alert-16: Required
</small>

The name of the tag, visible to users with the [`/tag`](../commands.md#tag) command.
You can add Unicode glyphs, but not emoji names or custom emoji.

### Auto tag regular expression

A regular expression (executed with the `mi` flags) that will trigger the tag when a message is sent [(in enabled channels)](./general.md#auto-tag-channels) that matches it.

This is an extremely simple yet powerful feature that allows you to configure the bot to respond to FAQs automatically.

### Content

<small>
:octicons-alert-16: Required
</small>

The text to be sent (in an embed) when the tag is triggered (with the command or regular expression).

!!! question "Coming soon"
    More customisability is planned: https://github.com/discord-tickets/bot/issues/445.
