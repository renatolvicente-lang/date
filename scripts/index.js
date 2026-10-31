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

    for (const msg of mensagens) {
        // Se a pessoa clicar em "Cancelar" (Não), significa que ela mudou de ideia!
        if (!confirm(msg)) {
            window.location.href = 'agendamento.html'; // Redireciona para a página do "SIM"
            return; // Para o código aqui e não mostra as próximas perguntas
        }
    }

    // Se a pessoa não mudar de ideia, vai para a página do "NÃO"
    window.location.href = 'btnNao.html';
});