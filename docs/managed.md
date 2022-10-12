---
description: An affordable managed bot is the easiest way to get your own ticket bot.
---

# Managed bot

An affordable managed bot is the easiest way to get your own ticket bot.
Choose a plan to get started.
[Terms of service](./terms.md) and [privacy policy](privacy.md#service-privacy-policy) apply.

## Plans

<small markdown>
Too expensive? [Create a ticket](https://lnk.earth/discord) and ask for a discount.
</small>

|                           |                                       Basic { .text-lg }                                       |                         Professional { .text-lg }                         |
| :------------------------ | :--------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
| Price                     |                                  **£2/month** or **£20/year**                                  |                       **£3/month** or **£30/year**                        |
| Uptime                    |                                        Best effort[^1]                                         |                              **99%** SLA[^2]                              |
| Archiving (transcripts)   |                                              :x:                                               |                            :white_check_mark:                             |
| Portal (web app)          |                                              :x:                                               | :white_check_mark:<br>(custom domain or `*.discordtickets.app` subdomain) |
| Feedback                  | :warning:<br>The [portal](features/index.md#portal) is currently the only way to view feedback |                            :white_check_mark:                             |
| Configuration service[^3] |           [£8](https://store.discordtickets.app/product/setupconfiguration-service)            |                            :white_check_mark:                             |

<div class="grid">
<button class="md-button md-button--primary" data-sell-store="6303" data-sell-product="27469" data-sell-theme="#5865F2"
	data-sell-darkmode="false">
	Buy Basic
</button>
<button class="md-button md-button--primary" data-sell-store="6303" data-sell-product="27473" data-sell-theme="#5865F2"
	data-sell-darkmode="false">
	Buy Professional
</button>
</div>

!!! warning "Before you buy"
	You need to follow [this guide](self-hosting/discord-application.md)
	<small><abbr title="This should take about 3 minutes">:octicons-clock-24: 3m</abbr></small>
	to correctly create your Discord application and find the bot token.

**If the buttons or modal are not working correctly, try going to [the store page](https://store.discordtickets.app/?group=3371).** 

### FAQs

#### Why are there two plans?

Both plans run exactly the same code, the only differences are in configuration:

1. Archiving is disabled in the Basic plan
2. The portal is not installed in the Basic plan

!!! abstract
	£3/month is already quite cheap, especially considering **you're paying for my time to install and update your bot so you don't have to.**
	The Basic plan exists so **you can pay even less if you don't need all of the features**.

#### Why do archives cost extra?

- Archiving dramatically increases CPU and database/storage usage
- Hosting & updating the portal requires more of my time
- Not everyone needs archives, so it would be unfair to make everyone pay more

Instead of thinking of it as archives costing more, think of it as you can save money by not using archives if you don't need to.

#### Why can't I view feedback?

Users **can** submit feedback on the Basic plan, but the portal is currently the only way to view feedback, so you cannot view it.

#### Which plan should I choose?

??? question "Do you need the archiving feature?"
	=== "Yes"
		Choose the **Professional** plan
	=== "No"
		Choose the **Basic** or the **Professional** plan

??? question "Do you need the feedback feature?"
	=== "Yes"
		Choose the **Professional** plan to be able to view feedback
	=== "No"
		Choose the **Basic** or the **Professional** plan

#### Can my bot have a custom status/activity?

Yes, you can include this in the comments field when you order, or ask later in a ticket on Discord.
Check [the documentation](./self-hosting/configuration.md#presence) for available placeholders.

#### Can I pay with PayPal?

No. Subscription payments are securely processed through [Stripe](https://stripe.com),
which accepts all major credit and debit cards, Apple Pay, and Google Pay.

#### What happens after I pay?

Please [join the Discord server](https://lnk.earth/discord), and if you have not received a DM within 24 hours, create a ticket.

> **:question: Still have questions? Create a ticket [on Discord](https://lnk.earth/discord) for help.**

[^1]: I will try my best to keep your bot working all the time, but there is no guarantee of uptime
[^2]: See the [terms](terms.md) for SLA details
[^3]: See the [store page](https://store.discordtickets.app/product/setupconfiguration-service) for details