let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;

function atualizarTempo() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }
    const tempo = (horas < 10 ? '0' : '') + horas + ':' +
                  (minutos < 10 ? '0' : '') + minutos + ':' +
                  (segundos < 10 ? '0' : '') + segundos;
    document.getElementById('tempo').innerHTML = tempo;
}

function iniciar() {
    if (!interval) {
        interval = setInterval(atualizarTempo, 1000);
    }
}

function pausar() {
    clearInterval(interval);
    interval = null;
}

function reiniciar() {
    clearInterval(interval);
    interval = null;
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById('tempo').innerHTML = '00:00:00';
}
