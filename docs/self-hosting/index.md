# Self-hosting

!!! warning ""
	Previous experience with hosting is recommended.
	If you don't understand this section, consider getting a [managed bot](../managed.md) instead.

## Requirements

You can view the supported installation methods on the next page <span class="tip">(:material-fire:{ title="Tip" } you can press ++n++ or ++gt++)</span>.
Regardless of the installation method you choose, the bot requires:

- **Node.js v18** or higher (with npm, pnpm, or yarn)
- a forwarded (not firewalled) port
- at least **150MB RAM**
- at least **1GB disk** space (at least 100MB for the database if archiving)
- a [supported database](#supported-databases) (MySQL 8 recommended)

!!! info ""
    Although the bot itself uses around 120MB RAM, npm can use at least triple that during installation.
    If you're not using the Docker image (which comes with dependencies pre-installed), you may experience
    installation problems when less than 250MB RAM is allocated.

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


## Hosting providers

[![BisectHosting](https://www.bisecthosting.com/partners/custom-banners/41ca8074-184e-4ad1-a44d-77750ee8bfb9.webp){ .no-glightbox }](https://bisecthosting.com/discordtickets?r=docs-self-hosting)

If you don't currently have a system that meets these requirements,
please consider using one of these recommended hosts with my affiliate link by clicking on the logo.
Buying with an affiliate link supports me at no extra cost to you.

<div class="grid" markdown>

<div markdown>

### Shared
$1.49/mo and get 25% off the first month with code `discordtickets`:

[![BisectHosting](/img/bisecthosting.webp){ .no-glightbox }](https://bisecthosting.com/discordtickets?r=docs-self-hosting)

</div>


<div markdown>

### Dedicated/virtual machines
Get €20 account credit:

[![Hetzner](/img/hetzner.png){ .no-glightbox }](https://lnk.earth/hetzner)

</div>

</div>
