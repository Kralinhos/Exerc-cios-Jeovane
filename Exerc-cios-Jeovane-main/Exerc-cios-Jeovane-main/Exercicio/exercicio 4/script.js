function classificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let categoria;
    if (idade < 12) {
        categoria = 'Crianca';
    } else if (idade < 18) {
        categoria = 'Adolescente';
    } else if (idade < 65) {
        categoria = 'Adulto';
    } else {
        categoria = 'Idoso';
    }
    document.getElementById('resultado').innerHTML = 'Voce e: ' + categoria;
}
