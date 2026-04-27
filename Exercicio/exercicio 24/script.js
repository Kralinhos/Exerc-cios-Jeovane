let intervalo = null;
let indiceAtual = 0;
const cores = ['red', 'yellow', 'green'];
const nomes = ['Vermelho', 'Amarelo', 'Verde'];
const tempos = [5, 2, 5]; 

function desenharSemaforo(corAtiva) {
    const semaforo = document.getElementById('semaforo');
    semaforo.innerHTML = '';
    
    cores.forEach((cor, indice) => {
        const div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.borderRadius = '50%';
        div.style.margin = '10px';
        div.style.backgroundColor = cor;
        div.style.opacity = indice === corAtiva ? '1' : '0.3';
        div.style.transition = 'opacity 0.3s';
        
        semaforo.appendChild(div);
    });
    
    const statusDiv = document.createElement('p');
    statusDiv.innerHTML = `Cor ativa: <strong>${nomes[corAtiva]}</strong> - ${tempos[corAtiva]}s`;
    semaforo.appendChild(statusDiv);
}

function iniciarSemaforo() {
    if (intervalo !== null) return;
    
    desenharSemaforo(indiceAtual);
    
    intervalo = setInterval(() => {
        indiceAtual = (indiceAtual + 1) % cores.length;
        desenharSemaforo(indiceAtual);
    }, 5000); 
}

function pararSemaforo() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
    }
}

desenharSemaforo(0);
