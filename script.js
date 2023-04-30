const countdownElement = document.getElementById('countdown');
const targetDate = new Date("2023-12-10T14:00:00").getTime(); // Cambia la fecha al objetivo deseado

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Sánchez se ha ido ATPC 😀";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
