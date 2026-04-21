function somar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = 'Resultado: ' + (num1 + num2);
}
function subtrair() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = 'Resultado: ' + (num1 - num2);
}
function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = 'Resultado: ' + (num1 * num2);
}
function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('resultado').innerHTML = 'Erro: Divisao por zero';
    } else {
        document.getElementById('resultado').innerHTML = 'Resultado: ' + (num1 / num2);
    }
}
