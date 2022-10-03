document.addEventListener("DOMContentLoaded", async function () {
	const data = await (await fetch('https://stats.discordtickets.app/api/v3/current')).json();
	document.getElementById('ea-stats-users').innerHTML = data.activated_users;
	document.getElementById('ea-stats-tickets').innerHTML = data.tickets;
	document.getElementById('ea-stats-servers').innerHTML = data.guilds.total;
});