function cadastrar() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    document.getElementById('dados').innerHTML = 
        'Nome: ' + nome + '<br>' +
        'Idade: ' + idade + '<br>' +
        'E-mail: ' + email;
}
