function gerarSenha() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    
    if (isNaN(quantidade) || quantidade < 1) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite uma quantidade válida.';
        return;
    }
    
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let senha = '';
    
    for (let i = 0; i < quantidade; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    
    document.getElementById('resultado').innerHTML = `<p>Senha gerada: <strong>${senha}</strong></p>`;
}
