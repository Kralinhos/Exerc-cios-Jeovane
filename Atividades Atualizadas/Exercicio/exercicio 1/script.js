function mostrarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    let resultado = '';
    for (let i = 0; i <= 10; i++) {
        resultado += numero + ' x ' + i + ' = ' + (numero * i) + '<br>';
    }
    document.getElementById('resultado').innerHTML = resultado;
}
