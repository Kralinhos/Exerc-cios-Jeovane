function iniciarContagem() {
    let numero = parseInt(document.getElementById('inicio').value);
    const contagem = document.getElementById('contagem');
    const interval = setInterval(() => {
        contagem.innerHTML = numero;
        numero--;
        if (numero < 0) {
            clearInterval(interval);
            contagem.innerHTML = 'Fim!';
        }
    }, 1000);
}
