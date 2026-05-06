function descobrirDia() {
    const dataInput = document.getElementById('data').value;
    
    if (!dataInput) {
        document.getElementById('resultado').innerHTML = 'Por favor, selecione uma data.';
        return;
    }
    
    const [year, month, day] = dataInput.split('-');
    const data = new Date(year, month - 1, day);
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
                        'Quinta-feira', 'Sexta-feira', 'Sábado'];
    
    const diaSemana = diasSemana[data.getDay()];
    const dataFormatada = data.toLocaleDateString('pt-BR');
    
    document.getElementById('resultado').innerHTML = `${dataFormatada} é uma ${diaSemana}`;
}
