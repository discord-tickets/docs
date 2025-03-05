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
you are automatically a service user and the [privacy policy](#service-privacy-policy){ data-preview } below applies.

### Compliance

> This section only applies to bot and guild administrators, not end-users.

At the time of writing, the Discord Tickets Bot does not have any functionality related to assisting you in the removal of user data.
It is your responsibility to ensure data is stored only for a reasonable amount of time and for removing data upon user request if required by law.

Your privacy policy should mention the collection, processing, and storage of the data mentioned above, and explain what its purpose is. 

## Service privacy policy

**The [above privacy notice](#open-source-software-privacy-notice){ data-preview } also applies to the public/managed hosted bot services.**

### Data collection and processing

As you must be at least 13 years old to use Discord, under-13s' data is not knowingly stored or processed.

No data is shared with or sold to third parties, although some data passes through third-party service providers.

#### Services

##### Websites

The websites may collect anonymous analytical data, without the use of third-party services or cookies.
No other data is collected.

##### Hosted bots (public and managed)

Please refer to the above privacy notice for information regarding stored data.
Each managed bot is isolated and has its own database (with different credentials), and a unique encryption key.
Yes, as with any public Discord bot, I could read your users' messages if I wanted to, but I have no reason to, and certainly don't have the time to.

The existence of archives is a choice of guild administrators.
Potential reasons for storing messages include staff training, evidence/protection,
or simply allowing users to read support team responses in the future so they don't need to ask the same question twice.
Archival ticket data such as message content and usernames may be stored indefinitely, for as long as the Discord guild administrators want.

Any data available to the bot through the Discord API may be received and temporarily cached,
though data that is not required for operation is not processed and not stored.

Managed bot customers' personal and private information such as name, address, email address, phone number, and credit card details are stored to take payment.
This data is stored securely by Stripe, but names and email addresses may be copied for the sole purpose of maintaining records of bots and their owners.

##### StatsAPI

The anonymous data that you (or your bot) submit is stored indefinitely.

Submitted data includes:

- number of activated users
- system architecture
- average resolution time
- average response time 
- number of categories
- database provider/type
- number of guilds
- MD5-hashed application/client/user ID
	(so your bot can update the original data)
- number of guild members
- number of archived messages
- Node.js version
- operating system name
- number of tags
- number of tickets
- bot version.

The IP address is not stored or processed.

This data is submitted optionally and is used for aggregated statistics to satisfy curiosity,
and to guide bot development based on usage or systems.

##### Third-party services

###### Cloudflare

Cloudflare provides hosting and hosting-related services for Discord Tickets services.

Read [Cloudflare's privacy policy](https://www.cloudflare.com/privacypolicy/).

###### Netlify

This website (`discordtickets.app`) and the Portal (`portal.discordtickets.app`) are hosted by Netlify.

Read [Netlify's privacy policy](https://www.netlify.com/privacy/) and [data protection statement](https://www.netlify.com/gdpr-ccpa/).

###### Stripe

Stripe provides payment processing services.

Read [Stripe's privacy policy](https://stripe.com/gb/privacy).

### Duration of data storage

Data is stored for as long as necessary, which may be explained in more detail for each service above.

### Requesting a copy of your data

If you would like to know what personal data is being stored, please [create a ticket on Discord](https://lnk.earth/discord) or email <contact@discordtickets.app>.

### Requesting changes to your data

To update your personal information on your billing profile, [create a ticket on Discord](https://lnk.earth/discord) or email <contact@discordtickets.app>.

### Requesting removal of your data

If you would like your data to be erased, [create a ticket on Discord](https://lnk.earth/discord) or email <contact@discordtickets.app>.