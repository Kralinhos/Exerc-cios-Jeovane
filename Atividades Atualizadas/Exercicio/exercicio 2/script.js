function mostrarOperacao() {
    const numero = parseInt(document.getElementById('numero').value);
    const operacao = document.getElementById('operacao').value;
    let resultado = '';
    for (let i = 0; i <= 10; i++) {
        let calc;
        switch (operacao) {
            case '+':
                calc = numero + i;
                break;
            case '-':
                calc = numero - i;
                break;
            case '*':
                calc = numero * i;
                break;
            case '/':
                calc = numero / i;
                break;
        }
        resultado += numero + ' ' + operacao + ' ' + i + ' = ' + calc + '<br>';
    }
    document.getElementById('resultado').innerHTML = resultado;
}
