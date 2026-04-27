function verificarBissexto() {
    const ano = parseInt(document.getElementById('ano').value);
    
    if (isNaN(ano) || ano < 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite um ano válido.';
        return;
    }
    
    let isBissexto = false;
    
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        isBissexto = true;
    }
    
    const mensagem = isBissexto ? `${ano} é um ano bissexto.` : `${ano} não é um ano bissexto.`;
    document.getElementById('resultado').innerHTML = mensagem;
}
