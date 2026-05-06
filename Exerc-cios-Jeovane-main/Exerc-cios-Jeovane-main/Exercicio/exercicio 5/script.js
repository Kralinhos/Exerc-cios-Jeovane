function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const media = (nota1 + nota2 + nota3) / 3;
    const status = media >= 6 ? 'Aprovado' : 'Reprovado';
    document.getElementById('resultado').innerHTML = 'Média: ' + media.toFixed(2) + ' - ' + status;
}
