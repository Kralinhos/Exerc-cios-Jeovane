function validarFormulario(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    const resultado = document.getElementById('resultado');
    
    if (!nome) {
        alert('Por favor, preencha o campo Nome.');
        resultado.innerHTML = '';
        return;
    }
    
    if (!email) {
        alert('Por favor, preencha o campo E-mail.');
        resultado.innerHTML = '';
        return;
    }
    
    if (!validarEmail(email)) {
        alert('Por favor, digite um e-mail válido.');
        resultado.innerHTML = '';
        return;
    }
    
    if (!mensagem) {
        alert('Por favor, preencha o campo Mensagem.');
        resultado.innerHTML = '';
        return;
    }
    
    resultado.innerHTML = `<p>Formulário enviado com sucesso!</p>
                           <p>Nome: ${nome}</p>
                           <p>E-mail: ${email}</p>
                           <p>Mensagem: ${mensagem}</p>`;
    
    document.querySelector('form').reset();
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
