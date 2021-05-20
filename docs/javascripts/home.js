window.onload = async function () {
	const response = await fetch('https://stats.discordtickets.app/');
	if (response.ok) {
		const stats = await response.json();
		console.log(stats);
		document.getElementById('tickets-count').innerHTML = stats.tickets;
	}
}