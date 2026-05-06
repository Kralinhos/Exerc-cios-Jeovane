function classificarNumero() {
    const numero = parseFloat(document.getElementById('numero').value);
    
    if (isNaN(numero)) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite um número válido.';
        return;
    }
    
    let classificacao;
    
    if (numero > 0) {
        classificacao = 'Positivo';
    } else if (numero < 0) {
        classificacao = 'Negativo';
    } else {
        classificacao = 'Zero';
    }
    
    document.getElementById('resultado').innerHTML = `O número ${numero} é ${classificacao.toLowerCase()}.`;
}
