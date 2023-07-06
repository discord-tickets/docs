# API

!!! warning ""
    Due to how [token invalidation](./self-hosting/configuration.md#invalidate_tokens) works, **service keys are not available on public instances**.

The API is currently undocumented, but you can find all of the available routes (and reasonably easy-to-understand code) in [`src/routes/api`](https://github.com/discord-tickets/bot/tree/main/src/routes/api).

## Authentication

Log in to the settings panel in your browser, then go to `/api/users/@me/key` to generate a service key.
Include the token in the `Authorization` header of your request:

```http
Authorization: Bearer your.token.here
```

Unlike user tokens, service keys do not expire, but cannot be used on all routes (notably `/api/admin/guilds`).
Service keys have the same permissions as their creator.
