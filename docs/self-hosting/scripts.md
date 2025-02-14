---
status: new
---

# Scripts

## General

### `db.dump`

Converts the database into JSON and writes it to a file in `user/dumps/`.
This is not an efficient backup method; it is intended for converting between databases (e.g. SQLite to MySQL).

=== "npm"
    ```bash linenums="0"
    npm run db.dump
    ```
=== "pnpm"
    ```bash linenums="0"
    pnpm db.dump
    ```

### `db.prune`

Deletes all data from guilds in the database where the bot was first added
**more than `a` days ago** **and** there has not been a ticket created
**less than `t` days ago.**

=== "npm"
    ```bash linenums="0"
    npm run db.prune -- [options]
    ```
=== "pnpm"
    ```bash linenums="0"
    pnpm db.dump [options]
    ```

!!! example
    ```bash linenums="0"
    $ pnpm db.prune -h
    Usage: prune [options]

    Options:
      -y, --yes              ARE YOU SURE?
      -a, --age <number>     delete guilds older than <a> days (default: 90)
      -t, --ticket <number>  where the most recent ticket was created over <t> days ago (default: 365)
      -h, --help             display help for command
    ```



### `db.restore`

Reset the database, then import data from a dump file.

=== "npm"
    ```bash linenums="0"
    npm run db.restore -- [options]
    ```
=== "pnpm"
    ```bash linenums="0"
    pnpm db.restore [options]
    ```

!!! example
    ```bash linenums="0"
    $ pnpm db.restore -h
    Usage: restore [options]

    Options:
      -f, --file <path>  the path of the dump to import
      -y, --yes          yes, DELETE EVERYTHING in the database
      -h, --help         display help for command
    ```

### `keygen`

Generates and outputs a new encryption key.

### `preinstall`

This should run automatically when you run `npm install`.
Creates a `.env` file with a generated encryption key, except in CI environments.

### `postinstall`

This should run automatically when you run `npm install`.
If `DB_PROVIDER` is set, copies the appropriate database schema and migration files,
then generates the prisma client and deploys migrations.

### `start`

Starts the bot.

### `studio`

Starts a web server running Prisma Studio, a web-based GUI for viewing and editing records in your database.

## Development

### `changelog`
### `contributors:add`

Add yourself as a contributor.

[Documentation](https://allcontributors.org/docs/en/cli/usage#all-contributors-add){.md-button .md-button--primary}

### `contributors:generate`

Regenerate `CONTRIBUTORS.md`, shouldn't be necessary.

### `lint`

Check for and automatically fix formatting errors.

### `test`

Check the i18n files are valid.
