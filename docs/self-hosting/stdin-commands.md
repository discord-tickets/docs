---
description: Information about the available stdin commands
---

# Stdin commands

These commands are for administrative purposes so are only available in the console, not through Discord.

## `commands`

### `commands publish`

This command registers the application commands with Discord and should be run after updating.
If your bot is set to update automatically, you can set the [`PUBLISH_COMMANDS`](../self-hosting/configuration.md#publish_commands)
environment variable to do this automatically at startup.

## `eval`

This is a potentially dangerous command that can be used for troubleshooting, getting data, sending custom messages, etc.
Everything after the command name is expected to be valid JavaScript and the return value is logged to console.
You can access the (extended) discord.js client through `this.client`.

!!! example "Examples"
    ```js linenums="0"
    eval this.client.user.username
    ```

    ```js linenums="0"
    eval this.client.guilds.cache.map(g => g.name)
    ```

## `exit`

Terminate the process.

## `help`

Show a list of available commands.

## `npx`

Execute an npm package. May be useful in shared hosting environments (e.g. Pterodactyl) where you don't have access to a shell.

!!! example
    ```sh linenums="0"
    npx prisma migrate resolve
    ```

## `settings`

Get a link to the settings panel.

## `suid-time`

Decode the timestamp from an error ID. This may help you find the error as you will know which log file to search.

!!! example
    ```linenums="0"
    suid-time 6498b284u0
    ```

## `sync`

If the in-memory cache becomes out of sync with the database, this command will re-run part of the startup sequence to refresh the cache.
This is helpful if the database is modified externally and you don't want to cause downtime by restarting the bot.

## `version`

Get the current bot version and check for updates.
