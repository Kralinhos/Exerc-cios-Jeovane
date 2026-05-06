let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

function adicionarProduto() {
    const nome = document.getElementById('nomeProduto').value.trim();
    const preco = parseFloat(document.getElementById('precoProduto').value);
    
    if (!nome) {
        alert('Por favor, digite o nome do produto.');
        return;
    }
    
    if (isNaN(preco) || preco < 0) {
        alert('Por favor, digite um preço válido.');
        return;
    }
    
    const produto = {
        id: Date.now(),
        nome: nome,
        preco: preco
    };
    
    produtos.push(produto);
    salvarProdutos();
    document.getElementById('nomeProduto').value = '';
    document.getElementById('precoProduto').value = '';
    renderizarProdutos();
}

function deletarProduto(id) {
    produtos = produtos.filter(produto => produto.id !== id);
    salvarProdutos();
    renderizarProdutos();
}

function salvarProdutos() {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

function calcularTotal() {
    return produtos.reduce((total, produto) => total + produto.preco, 0);
}

function renderizarProdutos() {
    const container = document.getElementById('produtos');
    
    if (produtos.length === 0) {
        container.innerHTML = '<p>Nenhum produto cadastrado.</p>';
        document.getElementById('total').innerText = 'R$ 0.00';
        return;
    }
    
    let html = '<table border="1" cellpadding="10">';
    html += '<tr><th>Produto</th><th>Preço</th><th>Ação</th></tr>';
    
    produtos.forEach(produto => {
        html += `<tr>
                    <td>${produto.nome}</td>
                    <td>R$ ${produto.preco.toFixed(2)}</td>
                    <td><button onclick="deletarProduto(${produto.id})">Deletar</button></td>
                </tr>`;
    });
    
    html += '</table>';
    container.innerHTML = html;
    
    const total = calcularTotal();
    document.getElementById('total').innerText = `R$ ${total.toFixed(2)}`;
}


renderizarProdutos();
