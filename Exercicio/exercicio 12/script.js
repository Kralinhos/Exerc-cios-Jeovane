let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinhar() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const resultado = document.getElementById('resultado');
    if (palpite === numeroSecreto) {
        resultado.innerHTML = 'Parabens! Voce acertou!';
    } else if (palpite < numeroSecreto) {
        resultado.innerHTML = 'Muito baixo! Tente novamente.';
    } else {
        resultado.innerHTML = 'Muito alto! Tente novamente.';
    }
}

function novoJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('palpite').value = '';
}
