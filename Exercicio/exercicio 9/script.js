function verificarSenha() {
    const senha = document.getElementById('senha').value;
    const forca = senha.length >= 8 ? 'Forte' : 'Fraca';
    document.getElementById('resultado').innerHTML = 'A senha e: ' + forca;
}
