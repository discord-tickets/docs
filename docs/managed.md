---
template: managed.html
description: An affordable managed bot is the easiest way to get your own ticket bot.
tags:
  - Archives
---

# Managed bot

An affordable managed bot is **the easiest way to get your own ticket bot because the technical side is managed for you.**
Choose a plan to get started.
[Terms of service](./terms.md) and [privacy policy](privacy.md#service-privacy-policy) apply.

## Plans

<small markdown>
Too expensive? [Create a ticket](https://lnk.earth/discord) and ask for a discount (within reason).
</small>

=== "GBP"

    <div class="pricing-table-container">
    <stripe-pricing-table pricing-table-id="prctbl_1MDE08Ebl2jK6wYdiPaLl7I3" publishable-key="pk_live_51MD8wcEbl2jK6wYdEgyQzlmV73jAIMRB41gZoesOe5B2zCEZHgGoZvG9YIxfX7TxPePre6szwFfIWJOLF4uWmILU00NoUviGyK" />
    </div>

=== "EUR"

    <div class="pricing-table-container">
    <stripe-pricing-table pricing-table-id="prctbl_1NfY9yEbl2jK6wYdvynhuO5V" publishable-key="pk_live_51MD8wcEbl2jK6wYdEgyQzlmV73jAIMRB41gZoesOe5B2zCEZHgGoZvG9YIxfX7TxPePre6szwFfIWJOLF4uWmILU00NoUviGyK" />
    </div>
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>

=== "USD"

    <div class="pricing-table-container">
    <stripe-pricing-table pricing-table-id="prctbl_1NfY6xEbl2jK6wYdMvnOz0Mb" publishable-key="pk_live_51MD8wcEbl2jK6wYdEgyQzlmV73jAIMRB41gZoesOe5B2zCEZHgGoZvG9YIxfX7TxPePre6szwFfIWJOLF4uWmILU00NoUviGyK" />
    </div>
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>

## What you're paying for

!!! abstract ""
    Hosting, and an admin to do everything for you, all for a comparable or even lower price than self-hosting.

- A secure, containerised, auto-updating[^1] bot instance hosted in the EU
- Efficient hosting
    - Powered by [Ampere® Altra®](https://amperecomputing.com/briefs/ampere-altra-family-product-brief), less energy is used for operation and cooling[^2]
    - Higher CPU utilisation due to many bots running on the same server[^3]
    - <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
    	style="width:auto; height:1em; vertical-align:text-bottom;">
    	<linearGradient id="StripeClimate-gradient-a" gradientUnits="userSpaceOnUse" x1="16"
    		y1="20.6293" x2="16" y2="7.8394" gradientTransform="matrix(1 0 0 -1 0 34)">
    		<stop offset="0" stop-color="#00d924" />
    		<stop offset="1" stop-color="#00cb1b" />
    	</linearGradient>
    	<path d="M0 10.82h32c0 8.84-7.16 16-16 16s-16-7.16-16-16z" fill="url(#StripeClimate-gradient-a)" />
    	<linearGradient id="StripeClimate-gradient-b" gradientUnits="userSpaceOnUse" x1="24"
    		y1="28.6289" x2="24" y2="17.2443" gradientTransform="matrix(1 0 0 -1 0 34)">
    		<stop offset=".1562" stop-color="#009c00" />
    		<stop offset="1" stop-color="#00be20" />
    	</linearGradient>
    	<path
    		d="M32 10.82c0 2.21-1.49 4.65-5.41 4.65-3.42 0-7.27-2.37-10.59-4.65 3.52-2.43 7.39-5.63 10.59-5.63C29.86 5.18 32 8.17 32 10.82z"
    		fill="url(#StripeClimate-gradient-b)" />
    	<linearGradient id="StripeClimate-gradient-c" gradientUnits="userSpaceOnUse" x1="8" y1="16.7494"
    		x2="8" y2="29.1239" gradientTransform="matrix(1 0 0 -1 0 34)">
    		<stop offset="0" stop-color="#ffe37d" />
    		<stop offset="1" stop-color="#ffc900" />
    	</linearGradient>
    	<path
    		d="M0 10.82c0 2.21 1.49 4.65 5.41 4.65 3.42 0 7.27-2.37 10.59-4.65-3.52-2.43-7.39-5.64-10.59-5.64C2.14 5.18 0 8.17 0 10.82z"
    		fill="url(#StripeClimate-gradient-c)" />
    </svg>
     1% of revenue goes to [Stripe Climate](https://stripe.com/climate) to remove CO~2~ from the atmosphere <!--CO₂-->
- [Nightly database backups](https://status.eartharoid.me/), encrypted and kept for 30 days
- :heart: **You're directly supporting the bot's developer**
- :herb: **100% Renewable electricity**

[Create a ticket](https://lnk.earth/discord) if you have questions about security, privacy, compliance, etc. We're happy to help!

## FAQs

### Why are there two plans?

Both plans run the same code, the only difference is that archiving is disabled on the Basic plan.
This is because **the majority of storage costs are from archiving** (storing transcripts).
**If you aren't going to use this feature, your bot will be cheaper to host.**

!!! abstract ""
	£3/month is already quite cheap, especially considering you're paying for my time to manage the technical side so you don't have to.
	The Basic plan exists so **you can pay even less if you don't need the most expensive feature**.

### Which plan should I choose?

??? question "Do you need the archiving feature?"
	=== "Yes"
		Choose the **Professional** plan
	=== "No"
		Choose the **Basic** or the **Professional** plan

??? question "Do you have a domain name?"
	=== "Yes"
		Choose the **Professional** plan
	=== "No"
		Choose the **Basic** or the **Professional** plan

### Can my bot have a custom status/activity?

Yes, you can specify custom activities when you create a ticket.
Check [the documentation](./self-hosting/configuration.md#presence) for available placeholders.


### Can I edit the code?

No, you don't have access to the files or console. Everything is completely managed for you.
To keep administration easy, and for security, every bot instance runs identical code.

If you want more flexibility, consider [self-hosting](../self-hosting/) with a [recommended hosting provider](../self-hosting/#hosting-providers).

!!! tip
    The exception to this is that you can provide a custom locale file to further customise the bot's messages.

### What payment methods are supported?

All payments are securely processed by [Stripe](https://stripe.com/).
Depending on your location, you can pay with:

- [x] Card (Visa, Mastercard, American Express, etc)
- [x] Apple Pay
- [x] Google Pay
- [x] PayPal [(see below)](#can-i-pay-with-paypal)
- [x] Bancontact ([EUR](#eur) only)
- [x] iDEAL ([EUR](#eur) only)
- [x] SEPA Direct Debit ([EUR](#eur) only)
- [x] Sofort ([EUR](#eur) only)
- [x] Revolut Pay ([GBP](#gbp)/[EUR (beta)](#eur) only)
- [x] Bacs Direct Debit ([GBP](#gbp) only)

Availability of payment methods may vary by country in addition to currency.


For one-time payments (not subscriptions), you can also pay with:

- [x] Klarna
- [x] P24 ([EUR](#eur) only)
- [x] EPS ([EUR](#eur) only)
- [x] giropay ([EUR](#eur) only)

Please select the appropriate currency for your location above the pricing table to show supported payment methods.

### Can I pay with PayPal?

**Yes, but card payments are preferred** because the fees are lower.
If PayPal is supported in your country, you'll see a PayPal button on the checkout page.

### Can I pay with crypto?

Please [create a ticket](https://lnk.earth/discord) if you are unable to pay using any of the methods listed above.

### How can I cancel or update my subscription?

You can manage your subscriptions on the [Stripe billing dashboard](https://billing.stripe.com/p/login/4gw7uK9kg2PL3xScMM),
or by creating a ticket on Discord.

[Manage subscriptions](https://billing.stripe.com/p/login/4gw7uK9kg2PL3xScMM){ .md-button .md-button--primary }

### What happens after I pay?

Please [join the Discord server](https://lnk.earth/discord) and create a ticket.
Your bot will usually be ready within 24 hours.

<!-- > **:question: Still have questions? Create a ticket [on Discord](https://lnk.earth/discord) for help.** -->

!!! question ""
    **Still have questions? Create a ticket [on Discord](https://lnk.earth/discord) for help.**

[^1]: Patches are applied automatically within an hour of release; feature updates are scheduled and performed manually.
[^2]: Compared to x86-based servers, ARM servers are more energy efficient
[^3]: More of the available resources are used compared to an average individual installation
