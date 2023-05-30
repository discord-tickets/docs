document.addEventListener("DOMContentLoaded", async function () {
	const data = await (await fetch('https://stats.discordtickets.app/api/v3/current')).json();
	document.getElementById('ea-stats-users').innerHTML = data.activated_users.toLocaleString(navigator.languages[0]);
	document.getElementById('ea-stats-tickets').innerHTML = data.tickets.toLocaleString(navigator.languages[0]);
	document.getElementById('ea-stats-servers').innerHTML = data.guilds.total.toLocaleString(navigator.languages[0]);
});