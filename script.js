document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const content = document.querySelector('.content');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const exercise = e.target.dataset.exercise;
            loadExercise(exercise);
        });
    });

    function loadExercise(num) {
        const ex = exercises[num];
        if (!ex) {
            content.innerHTML = '<h1>Exercício não encontrado</h1>';
            return;
        }
        content.innerHTML = `<h1>${ex.title}</h1>`;
        const form = document.createElement('form');
        ex.inputs.forEach(inp => {
            const label = document.createElement('label');
            label.textContent = inp.label;
            const input = document.createElement(inp.type === 'select' ? 'select' : inp.type === 'textarea' ? 'textarea' : 'input');
            if (inp.type === 'select') {
                inp.options.forEach(opt => {
                    const option = document.createElement('option');
                    option.value = opt;
                    option.textContent = opt;
                    input.appendChild(option);
                });
            } else if (inp.type !== 'textarea') {
                input.type = inp.type;
            }
            if (inp.step) input.step = inp.step;
            input.id = inp.name;
            input.name = inp.name;
            form.appendChild(label);
            form.appendChild(input);
        });
        if (ex.buttons) {
            ex.buttons.forEach(btn => {
                const button = document.createElement('button');
                button.textContent = btn.text;
                button.type = 'button';
                button.addEventListener('click', btn.action);
                form.appendChild(button);
            });
        } else {
            const button = document.createElement('button');
            button.textContent = 'Executar';
            button.type = 'button';
            button.addEventListener('click', () => {
                const output = document.querySelector('.output');
                output.textContent = ex.execute();
            });
            form.appendChild(button);
        }
        content.appendChild(form);
        const output = document.createElement('div');
        output.className = 'output';
        content.appendChild(output);
    }

    const exercises = {
        1: {
            title: 'Tabuada',
            inputs: [{name: 'numero', label: 'Número', type: 'number'}],
            execute: () => {
                const num = parseInt(document.getElementById('numero').value);
                let result = '';
                for (let i = 0; i <= 10; i++) {
                    result += `${num} x ${i} = ${num * i}\n`;
                }
                return result;
            }
        },
        2: {
            title: 'Operações Aritméticas',
            inputs: [
                {name: 'numero', label: 'Número', type: 'number'},
                {name: 'operacao', label: 'Operação', type: 'select', options: ['+', '-', '*', '/']}
            ],
            execute: () => {
                const num = parseInt(document.getElementById('numero').value);
                const op = document.getElementById('operacao').value;
                let result = '';
                for (let i = 0; i <= 10; i++) {
                    let res;
                    switch (op) {
                        case '+': res = num + i; break;
                        case '-': res = num - i; break;
                        case '*': res = num * i; break;
                        case '/': res = i !== 0 ? (num / i).toFixed(2) : 'Indefinido'; break;
                    }
                    result += `${num} ${op} ${i} = ${res}\n`;
                }
                return result;
            }
        },
        3: {
            title: 'IMC',
            inputs: [
                {name: 'peso', label: 'Peso (kg)', type: 'number', step: '0.01'},
                {name: 'altura', label: 'Altura (m)', type: 'number', step: '0.01'}
            ],
            execute: () => {
                const peso = parseFloat(document.getElementById('peso').value);
                const altura = parseFloat(document.getElementById('altura').value);
                const imc = (peso / (altura * altura)).toFixed(2);
                let categoria;
                if (imc < 18.5) categoria = 'Abaixo do peso';
                else if (imc < 25) categoria = 'Peso normal';
                else if (imc < 30) categoria = 'Sobrepeso';
                else categoria = 'Obesidade';
                return `IMC: ${imc}\nCategoria: ${categoria}`;
            }
        },
        4: {
            title: 'Classificação por Idade',
            inputs: [{name: 'idade', label: 'Idade', type: 'number'}],
            execute: () => {
                const idade = parseInt(document.getElementById('idade').value);
                let categoria;
                if (idade < 12) categoria = 'Criança';
                else if (idade < 18) categoria = 'Adolescente';
                else if (idade < 60) categoria = 'Adulto';
                else categoria = 'Idoso';
                return `Categoria: ${categoria}`;
            }
        },
        5: {
            title: 'Média de Notas',
            inputs: [
                {name: 'nota1', label: 'Nota 1', type: 'number', step: '0.01'},
                {name: 'nota2', label: 'Nota 2', type: 'number', step: '0.01'},
                {name: 'nota3', label: 'Nota 3', type: 'number', step: '0.01'}
            ],
            execute: () => {
                const n1 = parseFloat(document.getElementById('nota1').value);
                const n2 = parseFloat(document.getElementById('nota2').value);
                const n3 = parseFloat(document.getElementById('nota3').value);
                const media = ((n1 + n2 + n3) / 3).toFixed(2);
                const status = media >= 6 ? 'Aprovado' : 'Reprovado';
                return `Média: ${media}\nStatus: ${status}`;
            }
        },
        6: {
            title: 'Calculadora Básica',
            inputs: [
                {name: 'num1', label: 'Número 1', type: 'number', step: '0.01'},
                {name: 'num2', label: 'Número 2', type: 'number', step: '0.01'},
                {name: 'operacao', label: 'Operação', type: 'select', options: ['+', '-', '*', '/']}
            ],
            execute: () => {
                const n1 = parseFloat(document.getElementById('num1').value);
                const n2 = parseFloat(document.getElementById('num2').value);
                const op = document.getElementById('operacao').value;
                let result;
                switch (op) {
                    case '+': result = n1 + n2; break;
                    case '-': result = n1 - n2; break;
                    case '*': result = n1 * n2; break;
                    case '/': result = n2 !== 0 ? n1 / n2 : 'Erro: Divisão por zero'; break;
                }
                return `Resultado: ${result}`;
            }
        },
        7: {
            title: 'Par ou Ímpar',
            inputs: [{name: 'numero', label: 'Número', type: 'number'}],
            execute: () => {
                const num = parseInt(document.getElementById('numero').value);
                return num % 2 === 0 ? 'Par' : 'Ímpar';
            }
        },
        8: {
            title: 'Conversão de Moeda',
            inputs: [
                {name: 'reais', label: 'Valor em Reais', type: 'number', step: '0.01'},
                {name: 'cotacao', label: 'Cotação do Dólar', type: 'number', step: '0.01'}
            ],
            execute: () => {
                const reais = parseFloat(document.getElementById('reais').value);
                const cotacao = parseFloat(document.getElementById('cotacao').value);
                const dolares = (reais / cotacao).toFixed(2);
                return `Valor em Dólares: ${dolares}`;
            }
        },
        9: {
            title: 'Força da Senha',
            inputs: [{name: 'senha', label: 'Senha', type: 'password'}],
            execute: () => {
                const senha = document.getElementById('senha').value;
                return senha.length >= 8 ? 'Forte' : 'Fraca';
            }
        },
        10: {
            title: 'Análise de Texto',
            inputs: [{name: 'texto', label: 'Texto', type: 'textarea'}],
            execute: () => {
                const texto = document.getElementById('texto').value;
                const chars = texto.length;
                const trimmedText = texto.trim();
                const words = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;
                const upper = (texto.match(/[A-Z]/g) || []).length;
                return `Caracteres: ${chars}\nPalavras: ${words}\nMaiúsculas: ${upper}`;
            }
        },
        11: {
            title: 'Contagem Regressiva',
            inputs: [{name: 'inicio', label: 'Número Inicial', type: 'number'}],
            buttons: [{
                text: 'Iniciar Contagem',
                action: () => {
                    const inicio = parseInt(document.getElementById('inicio').value);
                    let count = inicio;
                    const output = document.querySelector('.output');
                    output.textContent = count;
                    const interval = setInterval(() => {
                        count--;
                        output.textContent = count;
                        if (count <= 0) {
                            clearInterval(interval);
                            output.textContent = 'Fim!';
                        }
                    }, 1000);
                }
            }]
        },
        12: {
            title: 'Jogo de Adivinhação',
            inputs: [{name: 'palpite', label: 'Palpite', type: 'number'}],
            buttons: [{
                text: 'Adivinhar',
                action: () => {
                    if (!window.secretNumber) {
                        window.secretNumber = Math.floor(Math.random() * 100) + 1;
                    }
                    const palpite = parseInt(document.getElementById('palpite').value);
                    const output = document.querySelector('.output');
                    if (palpite < window.secretNumber) {
                        output.textContent = 'Muito baixo!';
                    } else if (palpite > window.secretNumber) {
                        output.textContent = 'Muito alto!';
                    } else {
                        output.textContent = 'Parabéns! Você acertou!';
                        window.secretNumber = null;
                    }
                }
            }, {
                text: 'Novo Jogo',
                action: () => {
                    window.secretNumber = Math.floor(Math.random() * 100) + 1;
                    document.querySelector('.output').textContent = 'Novo jogo iniciado!';
                }
            }]
        },
        13: {
            title: 'Cadastro de Usuário',
            inputs: [
                {name: 'nome', label: 'Nome', type: 'text'},
                {name: 'idade', label: 'Idade', type: 'number'},
                {name: 'email', label: 'Email', type: 'email'}
            ],
            execute: () => {
                const nome = document.getElementById('nome').value;
                const idade = document.getElementById('idade').value;
                const email = document.getElementById('email').value;
                return `Nome: ${nome}\nIdade: ${idade}\nEmail: ${email}`;
            }
        },
        14: {
            title: 'Desconto em Compras',
            inputs: [{name: 'valor', label: 'Valor da Compra', type: 'number', step: '0.01'}],
            execute: () => {
                const valor = parseFloat(document.getElementById('valor').value);
                let desconto = 0;
                if (valor > 500) desconto = 0.2;
                else if (valor > 100) desconto = 0.1;
                const final = valor * (1 - desconto);
                return `Valor Original: ${valor.toFixed(2)}\nDesconto: ${(desconto * 100)}%\nValor Final: ${final.toFixed(2)}`;
            }
        },
        15: {
            title: 'Cronômetro',
            inputs: [],
            buttons: [{
                text: 'Iniciar',
                action: () => {
                    if (!window.interval) {
                        window.startTime = Date.now() - (window.elapsed || 0);
                        window.interval = setInterval(updateTime, 1000);
                    }
                }
            }, {
                text: 'Pausar',
                action: () => {
                    if (window.interval) {
                        clearInterval(window.interval);
                        window.interval = null;
                        window.elapsed = Date.now() - window.startTime;
                    }
                }
            }, {
                text: 'Resetar',
                action: () => {
                    if (window.interval) clearInterval(window.interval);
                    window.interval = null;
                    window.elapsed = 0;
                    document.querySelector('.output').textContent = '00:00:00';
                }
            }]
        },
        16: {
            title: 'Pokémon Aleatório',
            inputs: [],
            buttons: [{
                text: 'Gerar Pokémon',
                action: () => {
                    const pokemons = [
                        { name: 'Pikachu', id: 25 },
                        { name: 'Charizard', id: 6 },
                        { name: 'Bulbasaur', id: 1 },
                        { name: 'Squirtle', id: 7 },
                        { name: 'Jigglypuff', id: 39 },
                        { name: 'Eevee', id: 133 },
                        { name: 'Snorlax', id: 143 },
                        { name: 'Mewtwo', id: 150 },
                        { name: 'Gengar', id: 94 },
                        { name: 'Dragonite', id: 149 }
                    ];
                    const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
                    document.querySelector('.output').innerHTML = `<div class="pokemon-card"><h3>${randomPokemon.name}</h3><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.id}.png" alt="${randomPokemon.name}"></div>`;
                }
            }]
        },
        18: {
            title: 'Conversor de Temperatura',
            inputs: [
                {name: 'valor', label: 'Valor', type: 'number', step: '0.01'},
                {name: 'unidadeOrigem', label: 'De', type: 'select', options: ['Celsius', 'Fahrenheit', 'Kelvin']},
                {name: 'unidadeDestino', label: 'Para', type: 'select', options: ['Celsius', 'Fahrenheit', 'Kelvin']}
            ],
            execute: () => {
                const valor = parseFloat(document.getElementById('valor').value);
                const origem = document.getElementById('unidadeOrigem').value;
                const destino = document.getElementById('unidadeDestino').value;
                
                let kelvin;
                if (origem === 'Celsius') kelvin = valor + 273.15;
                else if (origem === 'Fahrenheit') kelvin = (valor - 32) * 5/9 + 273.15;
                else kelvin = valor;
                
                let resultado;
                if (destino === 'Celsius') resultado = (kelvin - 273.15).toFixed(2);
                else if (destino === 'Fahrenheit') resultado = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
                else resultado = kelvin.toFixed(2);
                
                const simbolos = {Celsius: '°C', Fahrenheit: '°F', Kelvin: 'K'};
                return `${valor}${simbolos[origem]} = ${resultado}${simbolos[destino]}`;
            }
        },
        19: {
            title: 'Dia da Semana',
            inputs: [{name: 'data', label: 'Data', type: 'date'}],
            execute: () => {
                const dataInput = document.getElementById('data').value;
                const [year, month, day] = dataInput.split('-');
                const data = new Date(year, month - 1, day);
                const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
                return `${data.toLocaleDateString('pt-BR')} é uma ${diasSemana[data.getDay()]}`;
            }
        },
        20: {
            title: 'Validação de Formulário',
            inputs: [
                {name: 'nome', label: 'Nome', type: 'text'},
                {name: 'email', label: 'E-mail', type: 'email'},
                {name: 'mensagem', label: 'Mensagem', type: 'textarea'}
            ],
            execute: () => {
                const nome = document.getElementById('nome').value.trim();
                const email = document.getElementById('email').value.trim();
                const mensagem = document.getElementById('mensagem').value.trim();
                
                if (!nome) return 'Erro: Nome vazio';
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Erro: E-mail inválido';
                if (!mensagem) return 'Erro: Mensagem vazia';
                
                return `Formulário válido!\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`;
            }
        },
        21: {
            title: 'Classificador de Número',
            inputs: [{name: 'numero', label: 'Número', type: 'number', step: '0.01'}],
            execute: () => {
                const num = parseFloat(document.getElementById('numero').value);
                if (num > 0) return `${num} é Positivo`;
                else if (num < 0) return `${num} é Negativo`;
                else return `${num} é Zero`;
            }
        },
        22: {
            title: 'Gerador de Senha',
            inputs: [{name: 'quantidade', label: 'Quantidade de caracteres', type: 'number', step: '1'}],
            execute: () => {
                const quantidade = parseInt(document.getElementById('quantidade').value);
                const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
                let senha = '';
                for (let i = 0; i < quantidade; i++) {
                    senha += caracteres[Math.floor(Math.random() * caracteres.length)];
                }
                return `Senha gerada: ${senha}`;
            }
        },
        23: {
            title: 'Ano Bissexto',
            inputs: [{name: 'ano', label: 'Ano', type: 'number'}],
            execute: () => {
                const ano = parseInt(document.getElementById('ano').value);
                const isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
                return `${ano} ${isBissexto ? 'é um ano bissexto' : 'não é um ano bissexto'}`;
            }
        },
        24: {
            title: 'Semáforo',
            inputs: [],
            buttons: [{
                text: 'Iniciar Semáforo',
                action: () => {
                    if (window.semaforoInterval) return;
                    const cores = ['red', 'yellow', 'green'];
                    let indice = 0;
                    const output = document.querySelector('.output');
                    
                    function mostrar() {
                        output.innerHTML = `<div style="width:100px;height:100px;border-radius:50%;background:${cores[indice]};margin:10px;"></div><p>${['Vermelho', 'Amarelo', 'Verde'][indice]}</p>`;
                    }
                    
                    mostrar();
                    window.semaforoInterval = setInterval(() => {
                        indice = (indice + 1) % cores.length;
                        mostrar();
                    }, 2000);
                }
            }, {
                text: 'Parar Semáforo',
                action: () => {
                    if (window.semaforoInterval) {
                        clearInterval(window.semaforoInterval);
                        window.semaforoInterval = null;
                    }
                }
            }]
        },
        25: {
            title: 'Ordenador de Nomes',
            inputs: [{name: 'nomes', label: 'Digite os nomes (separados por vírgula)', type: 'textarea'}],
            execute: () => {
                const nomesInput = document.getElementById('nomes').value;
                const nomes = nomesInput.split(',').map(n => n.trim()).filter(n => n !== '');
                const nomesOrdenados = nomes.sort((a, b) => a.localeCompare(b));
                return `Nomes em ordem alfabética:\n${nomesOrdenados.join('\n')}`;
            }
        },
        26: {
            title: 'Sistema TODO',
            inputs: [{name: 'tarefa', label: 'Nova Tarefa', type: 'text'}],
            buttons: [{
                text: 'Adicionar Tarefa',
                action: () => {
                    if (!window.tarefas26) window.tarefas26 = [];
                    const tarefa = document.getElementById('tarefa').value.trim();
                    if (tarefa) {
                        window.tarefas26.push({id: Date.now(), descricao: tarefa, concluida: false});
                        document.getElementById('tarefa').value = '';
                        renderTarefas26();
                    }
                }
            }]
        },
        27: {
            title: 'Sistema de Produtos',
            inputs: [
                {name: 'nomeProduto', label: 'Nome do Produto', type: 'text'},
                {name: 'precoProduto', label: 'Preço', type: 'number', step: '0.01'}
            ],
            buttons: [{
                text: 'Adicionar Produto',
                action: () => {
                    if (!window.produtos27) window.produtos27 = [];
                    const nome = document.getElementById('nomeProduto').value.trim();
                    const preco = parseFloat(document.getElementById('precoProduto').value);
                    if (nome && !isNaN(preco) && preco >= 0) {
                        window.produtos27.push({id: Date.now(), nome: nome, preco: preco});
                        document.getElementById('nomeProduto').value = '';
                        document.getElementById('precoProduto').value = '';
                        renderProdutos27();
                    }
                }
            }]
        }
    };

    function updateTime() {
        const elapsed = Date.now() - window.startTime;
        const totalSeconds = Math.floor(elapsed / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        document.querySelector('.output').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function renderTarefas26() {
        const output = document.querySelector('.output');
        if (!window.tarefas26 || window.tarefas26.length === 0) {
            output.innerHTML = '<p>Nenhuma tarefa cadastrada.</p>';
            return;
        }
        let html = '<table border="1" cellpadding="10" style="width:100%;border-collapse:collapse;"><tr><th>Tarefa</th><th>Status</th><th>Ação</th></tr>';
        window.tarefas26.forEach(t => {
            html += `<tr><td>${t.descricao}</td><td>${t.concluida ? 'Concluída' : 'Pendente'}</td><td><button onclick="toggleTarefa26(${t.id})">Alternar</button><button onclick="deleteTarefa26(${t.id})">Deletar</button></td></tr>`;
        });
        html += '</table>';
        output.innerHTML = html;
    }

    window.toggleTarefa26 = (id) => {
        const tarefa = window.tarefas26.find(t => t.id === id);
        if (tarefa) {
            tarefa.concluida = !tarefa.concluida;
            renderTarefas26();
        }
    };

    window.deleteTarefa26 = (id) => {
        window.tarefas26 = window.tarefas26.filter(t => t.id !== id);
        renderTarefas26();
    };

    function renderProdutos27() {
        const output = document.querySelector('.output');
        if (!window.produtos27 || window.produtos27.length === 0) {
            output.innerHTML = '<p>Nenhum produto cadastrado.</p><p>Total: R$ 0.00</p>';
            return;
        }
        let total = 0;
        let html = '<table border="1" cellpadding="10" style="width:100%;border-collapse:collapse;"><tr><th>Produto</th><th>Preço</th><th>Ação</th></tr>';
        window.produtos27.forEach(p => {
            total += p.preco;
            html += `<tr><td>${p.nome}</td><td>R$ ${p.preco.toFixed(2)}</td><td><button onclick="deleteProduto27(${p.id})">Deletar</button></td></tr>`;
        });
        html += '</table>';
        html += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
        output.innerHTML = html;
    }

    window.deleteProduto27 = (id) => {
        window.produtos27 = window.produtos27.filter(p => p.id !== id);
        renderProdutos27();
    };
});
