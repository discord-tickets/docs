---
template: home.html
title: Discord Tickets
---

!!! info "Hey!"
	If you have 5 minutes to spare, please complete [this survey](https://forms.office.com/r/LE1UbheBTm) about ticket bots.

## What is Discord Tickets?

Discord Tickets is a Discord bot for creating and managing ticket channels. It is a free and open-source alternative to the paid "premium" and "white-label" plans of popular ticketing bots, such as [Ticket Tool](https://tickettool.xyz/), [TicketsBot](https://ticketsbot.net/), [Tickety](https://tickety.net/), [Helper.gg](https://helper.gg/), [Helper](https://helper.wtf), and others.

Discord Tickets is feature-rich and much more customisable than many of the bots mentioned above. As it is intended for self-hosting, the bot can have your community/company's logo, for free.

Although intended for use in a single Discord server, the bot can also function in multiple servers at once if you run more than one community.

## Features

- Multiple ticket categories
- Multiple staff roles per category
- Multi-category, single-category, and reaction-less "panels"
- Ticket claiming 
- Use tags to send repetitive responses
- Gather feedback with surveys
- Get insights from statistics
- Add more features with plugins


## What makes it awesome?

### **Highly customisable**  
Some messages can be configured for each server and for each ticket category. Every other message is set in the locale files, making it relatively easy to override the default messages.
You can also configure the functionality of the bot to your liking and add commands with plugins.

### **Localisable**  
If the bot hasn't already been translated to your (community's) language, you can [translate](https://github.com/discord-tickets/.github/blob/main//CONTRIBUTING.md#translating) it yourself.
Plugin authors are encouraged to support multiple languages as well.

### **Multiple ticket categories**  
Each ticket category has its own settings for messages and the support team roles. There's also multiple methods of creating a ticket.

### **A beautiful ticket archives portal**  
**COMING SOON:** Add the official [Discord Tickets Portal](https://github.com/discord-tickets/portal) plugin for an instant ticket archives website.

### **Open-source and self-hosted**  
It's yours, you have full control.

### **Supports multiple databases**  
Discord Tickets uses [Sequelize](https://github.com/sequelize/sequelize) to allow you to choose from SQLite, MySQL, MariaDB, PostgreSQL, or MSSQL for your database, with very little setup.
If you choose SQLite, which is the default as it is the easiest, you don't need to do anything! If you choose to use another database (recommended), you only need to install the package(s) with NPM and create the database. All of the database tables are created automatically, regardless of which database type you use.
