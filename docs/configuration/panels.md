# Panels

!!! question "Editing panels"
    A way to load and edit existing panels is planned: https://github.com/discord-tickets/bot/issues/362.

## Options

### Categories

<small>
:octicons-alert-16: Required
</small>

The selected categories will be the options available to users through the buttons or select menu.

--8<-- "includes/multi-select.md"

### Channel

The channel to send the panel message to. The default is to create a new channel.

### Description

The embed description. You should use this to tell members how to receive support and explain what tickets are.

### Large image

An image URL to use as the embed's image.

### Small image (thumbnail)

An image URL to use as the embed's thumbnail.

### Title

<small>
:octicons-alert-16: Required
</small>

The embed title, such as `Support`, `Tickets`, `Need help?`, etc.

### Type

How members will select the category to create a ticket in.

- If you only select one category, the button will say "Create a ticket". Otherwise, buttons have category names and emojis.
- Buttons can be used for panels with 1-5 categories.
- Select menus can be used for panels with 2-25 categories.
