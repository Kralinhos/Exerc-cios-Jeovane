function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadeOrigem = document.getElementById('unidadeOrigem').value;
    const unidadeDestino = document.getElementById('unidadeDestino').value;
    
    if (isNaN(valor)) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite um valor válido.';
        return;
    }
    
    let kelvin;
    

    if (unidadeOrigem === 'celsius') {
        kelvin = valor + 273.15;
    } else if (unidadeOrigem === 'fahrenheit') {
        kelvin = (valor - 32) * 5/9 + 273.15;
    } else {
        kelvin = valor;
    }
    
    let resultado;
    if (unidadeDestino === 'celsius') {
        resultado = kelvin - 273.15;
    } else if (unidadeDestino === 'fahrenheit') {
        resultado = (kelvin - 273.15) * 9/5 + 32;
    } else {
        resultado = kelvin;
    }
    
    document.getElementById('resultado').innerHTML = `${valor}${getUnidade(unidadeOrigem)} = ${resultado.toFixed(2)}${getUnidade(unidadeDestino)}`;
}

function getUnidade(unidade) {
    const unidades = {
        'celsius': '°C',
        'fahrenheit': '°F',
        'kelvin': 'K'
    };
    return unidades[unidade];
}
