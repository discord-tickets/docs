# Self-hosting

!!! warning ""
	Previous experience with hosting is recommended.
	If you don't understand this section, consider getting a [managed bot](../managed.md) instead.

## Requirements

Regardless of the installation method you choose, the bot requires:

- **Node.js v18** or higher (with npm, pnpm, or yarn)
- **a free port**
- at least **150MB RAM**
- at least **1GB disk** space (at least 100MB for the database if archiving)
- a [supported database](#supported-databases) (MySQL 8 recommended)

Using `git` is recommended.

### Supported databases

| Provider                  | Database          | Supported versions                  |
| ------------------------- | ----------------- | ----------------------------------- |
| `mysql` **(recommended)** | MySQL             | `5.7` (`5.7.8` or higher), `8`      |
| `mysql`                   | MariaDB           | `10` (`10.5.7` or higher)           |
| `postgresql`              | PostgreSQL        | `9.4`, `10`, `11`, `12`, `13`, `14` |
| `sqlite`                  | SQLite (built-in) | `*`                                 |


!!! warning "SQLite should be avoided if you expect to use the archiving feature, especially in large guilds."
    SQLite is an embedded (rather than server-based) database and has some advantages:

    - :white_check_mark: Incredibly easy to use, nothing extra to install and configure
    - :white_check_mark: [Very fast](https://github.com/discord-tickets/bot/blob/8971c0ad13c287eb21c7a63341dd5c48c1b6ed06/src/client.js#L58-L68) for read-intensive workloads
    - :white_check_mark: No overhead (wasted resources going to the database server)

    **But archiving** requires a lot of writing which **may present some problems**, especially in large/active guilds:

    - :x: May be slower when messages are being written to the database
    - :x: The database file will only grow in size, even when data is deleted.
    This can be fixed by occasionally manually [vacuuming](https://www.sqlite.org/lang_vacuum.html) the database.
    *Auto vacuuming is not enabled as it would increase fragmentation and degrade performance.*

## Installation

If you don't currently have a system that meets these requirements, there are some hosting providers on the next page
<span class="tip">(:material-fire:{ title="Tip" } you can press ++n++)</span>.

[Install](./installation/index.md){ .md-button .md-button--primary }
