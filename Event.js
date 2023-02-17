/*const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const currentYear = new Date().getFullYear();*/
const szervezo = document.getElementById('szervezo')
const eventido = document.getElementById('eventido')
const eventneve = document.getElementById('eventnev')
/*const newYearTime = new Date(`December 01 ${currentYear} 20:00:00`);*/

// Update countdown time
/*function updateCountdown() {*/
/*	const currentTime = new Date();
	const diff = newYearTime - currentTime;*/

/*	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;*/
	eventneve.innerHTML = 'Jelenleg nincs közelgő event.'
	eventido.innerHTML = '' //'Event hossza: ' + '25perc'
    szervezo.innerHTML = '' //'Szervező: GergoPanda'
/*	days.innerHTML = d;
	hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);*/
