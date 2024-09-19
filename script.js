const cuentaAtras = document.getElementById('cuentaAtras');
const fechaFin = new Date("2027-11-01T21:00:00");

function actualizarCuentaAtras() {
    const now = new Date().getTime();
    const tiempoRestante = fechaFin - now;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    cuentaAtras.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (tiempoRestante < 0) {
        clearInterval(countdownInterval);
        cuentaAtras.innerHTML = "El presidente se ha ido por fin 😀";
    }
}

const countdownInterval = setInterval(actualizarCuentaAtras, 1000);

const fechaFinalElement = document.getElementById('fechaFinal');
fechaFinalElement.innerHTML = `Fecha final del mandato: ${fechaFin.toLocaleDateString()}`;
