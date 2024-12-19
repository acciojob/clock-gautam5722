function timerAndDate(){
	const timerData = document.getElementById('timer');
	const now = new Date();
	timerData.textContent = now.toLocaleString();
}

setInterval(timerAndDate, 1000);
timerAndDate();