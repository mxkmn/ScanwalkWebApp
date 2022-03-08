if (!user.isAccessible()) {
	alert('Необходимо войти ещё раз...');
	window.location.replace('get_id.html');
}
else {
	communications.getQr();
}

function update() {
	communications.getQr();
}
function activate(el) {
	['qr_image', 'waiting', 'timeout', 'connection_error'].forEach(element => {
		document.getElementById(element).style.display = (el == element) ? 'block' : 'none';
	});
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('pwa_sw.js')
		.then(() => { console.log('Сайт сохранён'); });
}