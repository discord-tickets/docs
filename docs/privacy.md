# Privacy

## Open-source software privacy notice

The Discord Tickets Bot open-source software receives the content of all messages sent in every channel that the Discord application user has access to.
If archiving is enabled (which it is by default), messages that are sent in ticket channels, along with related information such as the author's username or nickname, may be stored in the database.

You can see everything that can be stored in the database in [the database schema](https://github.com/discord-tickets/bot/blob/main/db/mysql/schema.prisma).

**The following data is encrypted at rest:**

- archived channel, role, and user names
- archived message content
- feedback comments
- ticket topics
- ticket (long text type) question answers.

**Data provided by guild administrators**, such as tag names, regex, content, category names and descriptions, footer text, question labels, placeholders, and values, **is not encrypted**.

The reasoning for this decision is that more encryption (especially for frequent-access data like some settings) reduces performance
and the data provided as settings (whilst could be considered user data) is not considered personal, private or sensitive end-user data.

Encryption-at-rest protects your users' data (primarily messages which may contain sensitive information) if your database is breached (assuming the encryption key isn't also stolen).

Unencrypted copies of user avatars and message attachments may also be stored on the disk (in the `user` directory).

Note that by default, the Discord Tickets Bot connects to the StatsAPI service, so [unless you disable it](./self-hosting/configuration.md#stats),
you are automatically a service user and the [privacy policy](#service-privacy-policy) below applies.

### Compliance

> This section only applies to bot and guild administrators, not end-users.

At the time of writing, the Discord Tickets Bot does not have any functionality related to assisting you in the removal of user data.
It is your responsibility to ensure data is stored only for a reasonable amount of time and for removing data upon user request if required by law.

Your privacy policy should mention the collection, processing, and storage of the data mentioned above, and explain what its purpose is. 

## Service privacy policy

**The [above privacy notice](#open-source-software-privacy-notice) also applies to the public/managed hosted bot services.**

### Data collection and processing

As you must be at least 13 years old to use Discord, under-13s' data is not knowingly stored or processed.

#### Services

##### Websites

##### Hosted bots (public and managed)

##### StatsAPI

##### Proxy

##### Third-party services

###### Cloudflare

###### Netlify

### Duration of data storage

### Requesting a copy of your data

### Requesting changes to your data

### Requesting removal of your data