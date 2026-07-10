// Seleção dos elementos do DOM
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');

// Ação ao clicar no botão "Sim" -> Redireciona para o agendamento
btnSim.addEventListener('click', () => {
    window.location.href = 'agendamento.html';
});

// Ação ao clicar no botão "Não" -> Sequência de diálogos
btnNao.addEventListener('click', () => {
    // Array com as frases que vão aparecer em sequência
    const mensagens = [
        "Tem certeza? 🥺",
        "Pensa mais um pouquinho...",
        "É sua decisão final mesmo? 😭",
        "Última chance... aceita sair comigo? ❤️"
    ];

    // Dispara um alert para cada frase da lista
    mensagens.forEach(msg => alert(msg));

    window.location.href = 'btnNao.html';
});