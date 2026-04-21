function converter() {
    const reais = parseFloat(document.getElementById('reais').value);
    const cotacao = parseFloat(document.getElementById('cotacao').value);
    const dolares = reais / cotacao;
    document.getElementById('resultado').innerHTML = 'Valor em Dolares: $' + dolares.toFixed(2);
}
