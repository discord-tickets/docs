document.addEventListener("DOMContentLoaded", async function () {
	const data = await (await fetch('https://stats.discordtickets.app/api/v4/current')).json();
	document.getElementById('ea-stats-users').innerHTML = data.combined.total.activated_users.toLocaleString(navigator.languages[0]);
	document.getElementById('ea-stats-tickets').innerHTML = data.combined.total.tickets.toLocaleString(navigator.languages[0]);
	document.getElementById('ea-stats-servers').innerHTML = data.combined.total.guilds.toLocaleString(navigator.languages[0]);
});
