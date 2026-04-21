function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);
    let categoria;
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc < 25) {
        categoria = 'Peso normal';
    } else if (imc < 30) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }
    document.getElementById('resultado').innerHTML = 'IMC: ' + imc.toFixed(2) + ' - ' + categoria;
}
