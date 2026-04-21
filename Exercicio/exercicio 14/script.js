function calcularDesconto() {
    const valor = parseFloat(document.getElementById('valor').value);
    let desconto = 0;
    if (valor > 500) {
        desconto = 0.20;
    } else if (valor > 100) {
        desconto = 0.10;
    }
    const valorFinal = valor * (1 - desconto);
    document.getElementById('resultado').innerHTML = 
        'Valor original: R$ ' + valor.toFixed(2) + '<br>' +
        'Desconto: ' + (desconto * 100) + '%<br>' +
        'Valor final: R$ ' + valorFinal.toFixed(2);
}
