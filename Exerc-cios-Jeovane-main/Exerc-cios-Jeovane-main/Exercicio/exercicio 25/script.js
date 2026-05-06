function ordenarNomes() {
    const nomesInput = document.getElementById('nomes').value;
    
    if (!nomesInput.trim()) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite pelo menos um nome.';
        return;
    }
    
    const nomes = nomesInput.split(',').map(nome => nome.trim()).filter(nome => nome !== '');
    
    if (nomes.length === 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite nomes válidos.';
        return;
    }
    
    const nomesOrdenados = nomes.sort((a, b) => a.localeCompare(b));
    
    let html = '<h2>Nomes em Ordem Alfabética:</h2><ul>';
    nomesOrdenados.forEach(nome => {
        html += `<li>${nome}</li>`;
    });
    html += '</ul>';
    
    document.getElementById('resultado').innerHTML = html;
}
