let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function adicionarTarefa() {
    const input = document.getElementById('tarefa');
    const descricao = input.value.trim();
    
    if (!descricao) {
        alert('Por favor, digite uma tarefa.');
        return;
    }
    
    const tarefa = {
        id: Date.now(),
        descricao: descricao,
        concluida: false
    };
    
    tarefas.push(tarefa);
    salvarTarefas();
    input.value = '';
    renderizarTarefas();
}

function deletarTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    salvarTarefas();
    renderizarTarefas();
}

function editarTarefa(id) {
    const novaDescricao = prompt('Editar tarefa:');
    
    if (novaDescricao !== null && novaDescricao.trim() !== '') {
        const tarefa = tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.descricao = novaDescricao.trim();
            salvarTarefas();
            renderizarTarefas();
        }
    }
}

function alternarConclusao(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        salvarTarefas();
        renderizarTarefas();
    }
}

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function renderizarTarefas() {
    const container = document.getElementById('tarefas');
    
    if (tarefas.length === 0) {
        container.innerHTML = '<p>Nenhuma tarefa cadastrada.</p>';
        return;
    }
    
    let html = '';
    tarefas.forEach(tarefa => {
        const estiloTexto = tarefa.concluida ? 'text-decoration: line-through;' : '';
        html += `
            <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0; border-radius: 5px;">
                <p style="${estiloTexto}">${tarefa.descricao}</p>
                <button onclick="alternarConclusao(${tarefa.id})">${tarefa.concluida ? 'Desmarcar' : 'Concluir'}</button>
                <button onclick="editarTarefa(${tarefa.id})">Editar</button>
                <button onclick="deletarTarefa(${tarefa.id})">Deletar</button>
            </div>
        `;
    });
    
    container.innerHTML = html;
}


renderizarTarefas();
