# Data migration

From v4.0.26 onwards, scripts are included for exporting and importing data of individual guilds.
This allows migrating between databases or instances of the bot.

## Exporting data

To dump a single guild's data, run the following command in the bot's base directory:

=== "npm"
    ```bash linenums="0"
    npm run bot.export -- -g <guild_id>
    ```
=== "pnpm"
    ```bash linenums="0"
    pnpm run bot.export -g <guild_id>
    ```

Note that this command requires the database and encryption key environment variables to be set.
This command writes a single file and prints the path to it.

!!! example
    ```bash linenums="0"
    $ npm run bot.export -- -g 810934178946351174

    > discord-tickets@4.0.26 bot.export
    > node scripts/export.mjs -g 810934178946351174

    ✔ Connected
    ✔ Exported settings
    ✔ Exported 3 categories
    ✔ Exported 1 tags
    ✔ Exported 9 tickets
    ✔ Written to "/home/container/user/dumps/80b5069d711591431db37f6a22742c73c1df44.dump"
    ```

!!! danger
    The file is lightly encrypted but **the encryption key is the guild ID**.
    Do not share the file publicly.

!!! warning
    **Do not rename the file.** The filename is a hash of the guild ID and must not be changed for the import script to work.

## Importing data

If moving from another instance, copy the guild's dump file into `user/dumps`.

Run the following command in the bot's base directory:

=== "npm"
    ```bash linenums="0"
    npm run bot.import -- -g <guild_id>
    ```
=== "pnpm"
    ```bash linenums="0"
    pnpm run bot.import -g <guild_id>
    ```

## Migrating from SQLite

The data migration scripts can be used to move from SQLite to another database.

1. [Export](#exporting-data) all guilds
2. Modify the [`DB_PROVIDER`](configuration.md#db_provider) and [`DB_CONNECTION_URL`](./configuration.md#db_connection_url) environment variables
3. Run `npm run postinstall`
4. [Import](#importing-data) all guilds
