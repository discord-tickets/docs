function generateKey() {
	if (crypto !== undefined) {
		return [...crypto.getRandomValues(new Uint8Array(24))].map(n => n.toString(16).padStart(2, '0')).join('');
	} else {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		return new Array(48).fill(null).map(() => characters[Math.floor(Math.random() * characters.length)]).join('');
	}
}

function regenerateKey() {
	const element = document.getElementById('encryptionKey');
	if (element) {
		element.innerText = generateKey();
	}
}

document.addEventListener("DOMContentLoaded", function () {
	regenerateKey();
	location$.subscribe(function () {
		regenerateKey();
	});
});




