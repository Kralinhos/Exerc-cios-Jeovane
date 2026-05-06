function verificarParImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = numero % 2 === 0 ? 'Par' : 'Impar';
    document.getElementById('resultado').innerHTML = 'O numero e: ' + resultado;
}
