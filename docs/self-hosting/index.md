# Self-hosting

!!! warning
	Previous experience with hosting is recommended.
	If you don't understand this section, consider getting a [managed bot](../managed.md) instead.

## Requirements

Regardless of the installation method you choose, the bot requires:

- **Node.js v18** or higher (with NPM, PNPM, or Yarn)
- **2 free ports** (only 1 needs to be open)
- at least **120MB memory** available
    - 150MB recommended for large guilds
- at least **500MB disk** space available
    - 750MB recommended for archiving in large guilds
- a [supported database](#supported-databases) (MySQL recommended)

Using `git` is strongly recommended.

### Supported databases

| Provider                  | Database          | Supported versions                  |
| ------------------------- | ----------------- | ----------------------------------- |
| `mysql` **(recommended)** | MySQL             | `5.6`, `5.7`, `8`                   |
| `mysql`                   | MariaDB           | `10`                                |
| `postgresql`              | PostgreSQL        | `9.4`, `10`, `11`, `12`, `13`, `14` |
| `sqlite`                  | SQLite (built-in) | `*`                                 |

!!! warning
	**SQLite should be avoided, especially if you are going to use the archiving feature.**
	It is significantly slower than a separate database server.

## Installation

If you don't currently have a system that meets these requirements, there are some hosting providers on the next page
<span class="tip">(:material-fire:{ title="Tip" } you can press ++n++)</span>.

[Install](./installation/index.md){ .md-button .md-button--primary }