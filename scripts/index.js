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

    // Última chance (pergunta direta)
    // Se clicar em OK (Sim), aceitou sair
    if (confirm("Última chance... aceita sair comigo? ❤️")) {
        window.location.href = 'agendamento.html'; // Muda para a página do "SIM"
    } else {
        window.location.href = 'btnNao.html'; // Se recusar até o fim, vai para a página do "NÃO"
    }
});