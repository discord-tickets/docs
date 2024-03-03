---
description: Troubleshooting tips and solutions to common problems
---

# Troubleshooting

## `@prisma/client did not initialize yet`

After setting the `DB_PROVIDER` and `DB_CONNECTION_URL` environment variables, `prisma migrate deploy` needs to be run.

This can be done manually but it is recommended to leave it to the `npm run postinstall` script.
You can run this directly, but it will also be run automatically when you run `npm install`.


!!! question "Still need help?"
    If this page didn't resolve your issue,
    you can ask for help [on Discord](https://lnk.earth/discord)
    or [on GitHub](https://github.com/discord-tickets/bot/discussions).


## Current working directory

Since [`v4.0.14`](https://github.com/discord-tickets/bot/releases/tag/v4.0.14), Discord Tickets supports starting the bot from any directory.
This has some advantages, but can also be confusing, especially if you do it unintentionally.
The `user` and `logs` directories and (optional) `.env` file are relative to the current working directory.

??? example
    For example, you could install the bot in `~/discord-tickets`:

    ```bash
    cd ~
    git clone https://github.com/discord-tickets/bot discord-tickets
    cd discord-tickets
    npm install
    ```

    but start the bot from `~/tickets-1` and `~/tickets-2`.

    ```bash
    mkdir ~/tickets-1 && cd ~/tickets-1
    ~/discord-tickets/scripts/start.sh
    ```

    This allows you to start multiple instances, with their configurations and data stored separately, without duplicating the code.

The primary use of feature this is to easily allow a volume to be mounted in a Docker container without affecting the installation.

### If you're using Docker (or Pterodactyl)

Don't worry - the base and working directories are supposed to be different.

- The bot is installed in `/app`, or `/home/container/app` in Pterodactyl (this is the base directory)
- You can mount a volume at `/home/container` (the working directory), which is where the `user` directory will be generated

### If you're not using Docker

If you have a reason to, you can start the bot from a directory other than the base directory, just make sure you start it from the same directory every time.
However, to avoid confusion, it's recommended to `cd` into the base directory before starting the bot as this keeps all of the bot's files in one place.

If you misuse this feature, you may encounter some of the following problems:

- Environment variables are not loaded
- Your custom configuration or templates are not loaded
- Missing attachments

To resolve these problems, `cd` into the directory where your files are stored before starting the bot.

## `fetch failed`

If you're seeing this when attempting to load the Portal webpage, it usually means that the [`HTTP_EXTERNAL`](./configuration.md#http_external)
environment variable is incorrect, or that a network configuration problem means that the address can't be resolved internally.
The bot makes HTTP requests to itself using this address (because the SvelteKit app is separate from the API, and it uses server-side rendering).
If the address is correct,

- Check your firewall
- Check the DNS and reverse proxy configuration if using a domain

If it still doesn't work, try setting the [`HTTP_INTERNAL`](./configuration.md#http_internal) value to a different address
(e.g. `http://127.0.0.1:8169`).

## Invalid user or role

An invalid role error that occurs during ticket creation, claiming/releasing, or transfer, usually means one of your staff roles has been deleted.
This can be resolved by navigating to the settings page of each of your categories and simply clicking Save.
This will remove any roles from the category that no longer exist.
If the category's only staff role was deleted, you will need to assign at least one new role before you can save the settings.
