# Categories

## Options

### Name

<small>
:octicons-alert-16: Required
</small>

This will be visible to users on panels buttons/select menus, the questions modal (if enabled), in transcripts, in the Portal, etc.
The name should be short and descriptive. Good examples include:

- `Support`
- `General`
- `Billing`
- `Bug reports`
- `Complaints`
- `Applications`
- `Reports`

### Channel name

<small>
:octicons-alert-16: Required ·
:material-factory: Default: `#!yaml ticket-{num}`
</small>

The name of the ticket channel.

#### Available placeholders

- `{num}`/`{number}`
- `{name}`/`{username}`
- `{nick}`/`{nickname}`


### Claiming

<small>
:material-factory: Default: `#!yaml false`
</small>

When enabled, staff members will be able to use `/claim` and `/release` [(and the button if enabled)](../general.md#claim) for tickets in this category.
Claiming removes all other staff (except administrators) from the channel and may be useful if there is high demand for support in your server.

### Cooldown

The amount of time members must wait (from creating a ticket) before opening another ticket in this category.

Must be an [ms](https://github.com/vercel/ms#readme)-parsable format (`15m`, `1h`, `1 day`, etc).

### Description

<small>
:octicons-alert-16: Required
</small>

A short (<100 characters) description to help members understand what the category is for.
This will be shown on panel select menus.

### Discord category

<small>
:material-factory: Default: `#!yaml Create a new category`
</small>

Ticket channels will be created under this Discord category.
The default option when creating a new ticket category is to create a new Discord category with the ticket category's name.

### Emoji

<small>
:octicons-alert-16: Required
</small>

A Unicode emoji name/glyph or Discord custom emoji ID. This is used on buttons and select menus when creating a ticket.
If you enter the name of a Unicode emoji (e.g. `ticket` or `:ticket:`), the glyph should appear:

![Screenshot](/img/category-emoji.png)

If you want to use a custom emoji, enter the numeric ID, which you can find by prepending the emoji name with `\`
(e.g. `\:earth:` which will become `<:earth:999437703730958388>`).
Emojis will be animated if an animated version is available.

Example of valid inputs:

- `:question:` --> :question:
- `question` --> :question:
- `❓`
- `999437703730958388` (a custom emoji ID).


!!! warning
    The conversion from names to glyphs is not perfect/identical to Discord's.
    For example, if you enter `:pleading:` the glyph will appear suggesting that the name is valid,
    but Discord calls :pleading_face:  `:pleading_face:`.

    Attempting to create a panel whilst a category has an invalid emoji will result in an error.
    For this reason, it is safer to use the glyph (`🥺`) rather than the name.

### Feedback

<small>
:material-factory: Default: `#!yaml false`
</small>

When enabled, the ticket creator will be prompted to give feedback on the support they received when they either make a close request or accept one.

### Image

The URL of an image to add to the opening message embed.

### Member limit

<small>
:material-factory: Default: `#!yaml 1`
</small>

The maximum number of tickets a member can have open in this category at once.

### Opening message

<small>
:octicons-alert-16: Required
</small>

Text that will be part of the ticket opening message.
Use this to provide and ask for information, such as stating what is expected of the member (e.g. don't ping staff) and what information they need to provide.

#### Available placeholders

- `{name}`/`{username}` (the creator)
- `{avgResponseTime}` (for this category only)
- `{avgResolutionTime}` (for this category only)

### Ping roles

The selected roles will be pinged (in the opening message) when a ticket is created.

### Slow mode

<small>
:material-factory: Default: `#!yaml Off`
</small>

This option enables Discord's slow mode in ticket channels with the selected cooldown.

### Required roles

Members will not be able to create tickets in this category unless they have the required roles.

!!! warning ""
    The current behaviour is that members must have **all** of the selected roles,
    so in most cases you will want to select only one role.

### Require topic

<small>
:material-factory: Default: `#!yaml Off`
</small>

When enabled, members will be prompted to enter a topic through a modal form when creating a ticket.
This can be edited later using the [`/topic`](../../features/commands.md#topic) command or the *Edit* button on the opening message.

Note that topic and [questions](./questions.md) are mutually exclusive and this option is ignored if questions are present.

### Staff roles

<small>
:octicons-alert-16: Required
</small>

The selected roles will be added to ticket channels when they are created.

--8<-- "includes/multi-select.md"

### Total limit

<small>
:material-factory: Default: `#!yaml 50`
</small>

This limits the total number of tickets (between all members) that can be open in this category at once.
The default value, 50, is the maximum number of channels that can be under a Discord category.

You may want to lower this limit so your staff team doesn't get overwhelmed.
For example, it would be a good idea to set this to 5 or 10 for a reports category, so you don't get 30 identical reports at once.
