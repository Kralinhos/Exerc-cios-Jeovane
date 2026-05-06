function analisarTexto() {
    const texto = document.getElementById('texto').value;
    const caracteres = texto.length;
    const palavras = texto.trim().split(/\s+/).filter(word => word.length > 0).length;
    const maiusculas = (texto.match(/[A-Z]/g) || []).length;
    document.getElementById('resultado').innerHTML = 
        'Caracteres: ' + caracteres + '<br>' +
        'Palavras: ' + palavras + '<br>' +
        'Letras maiusculas: ' + maiusculas;
}
