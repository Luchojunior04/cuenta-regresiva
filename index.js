function updateCountdown() {
    const chirsmasDate = new Date(2026, 0, 1).getTime();
    const now = new Date()
    const gap = chirsmasDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
   
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('dia').innerText = textDay;
    document.getElementById('hora').innerText = textHour;
    document.getElementById('minuto').innerText = textMinute;
    document.getElementById('segundo').innerText = textSecond;

}

setInterval(updateCountdown, 1000);
updateCountdown();
