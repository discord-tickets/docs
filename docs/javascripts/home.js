async function stats() {
	const response = await fetch('https://stats.discordtickets.app/');
	if (response.ok) {
		const stats = await response.json();
		console.log(stats);
		document.getElementById('clients-count').innerHTML = stats.clients;
		document.getElementById('tickets-count').innerHTML = stats.tickets;
		document.getElementById('guilds-count').innerHTML = stats.guilds;
		document.getElementById('members-count').innerHTML = stats.members;
	}
}

window.onload = function () {
	stats();
	location$.subscribe(function (url) {
		setTimeout(function () {
			if (url.path === '/') {
				stats();
			}
		}, 1500);
	});
};