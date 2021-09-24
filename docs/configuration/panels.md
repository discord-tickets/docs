# Panels

Discord Tickets supports 3 types of panels.
You can set the panel message's `title`, `description`, `image`, and `thumbnail`. When you use the `/panel` command the bot will create a new channel for the panel. You can rename this channel after through the Discord UI.

!!! warning
	The IDs of the categories **must** be categories created using `/settings categories create`. You can use `/settings categories list` to get the IDs.

## Button panels

A button panel can open tickets in a **single category**.

Create a button panel using the `/panel` command, giving a single category ID.

![(Image)](https://static.eartharoid.me/sharex/21/09/DiscordPTB_NeBG2ar5fb.png)

![(Image)](https://static.eartharoid.me/sharex/21/09/DiscordPTB_VSTew9HYTy.png)

## Selection menu panels

A select panel can open tickets in **multiple categories**.

Create a select panel using the `/panel` command, giving two or more category IDs separated by a comma (`,`).

![(Image)](https://static.eartharoid.me/sharex/21/09/DiscordPTB_LpcvehJAGM.png)

![(Image)](https://static.eartharoid.me/sharex/21/09/DiscordPTB_f7qLivR0AY.png)

## "Just type" panels

"Just type" panels can open tickets in a **single category**. They allow members to create a ticket just by typing the topic in the panel channel. This panel type is not recommended as members can potentially see what other members are creating tickets about.

Create a "just type" panel using the `/panel` command, giving a single category ID and setting `just_type` to `True`.

![(Image)](https://static.eartharoid.me/sharex/21/09/DiscordPTB_EDbZiRZojX.png)

![(Image)](https://static.eartharoid.me/sharex/21/09/DiscordPTB_EMgSuv3Kqh.png)


<!-- do not delete -->
--8<-- "includes/terms.md"
<!-- /do not delete -->
