// Seleção dos elementos do formulário e dos cards
const formEncontro = document.getElementById('form-encontro');
const formCard = document.getElementById('form-card');
const sucessoCard = document.getElementById('sucesso-card');

// Campos do resumo
const resumoData = document.getElementById('resumo-data');
const resumoHorario = document.getElementById('resumo-horario');
const resumoLocal = document.getElementById('resumo-local');
const resumoObs = document.getElementById('resumo-obs');

// Ouve o evento de envio (submit) do formulário
formEncontro.addEventListener('submit', (event) => {
    // Impede a página de recarregar
    event.preventDefault();

    // Captura os valores digitados pelo usuário
    const dataVal = document.getElementById('data').value;
    const horarioVal = document.getElementById('horario').value;
    const localVal = document.getElementById('local').value;
    const obsVal = document.getElementById('observacoes').value;

    // Formata a data para o padrão brasileiro (DD/MM/AAAA)
    const dataFormatada = dataVal.split('-').reverse().join('/');

    // Preenche as informações no card de resumo
    resumoData.textContent = dataFormatada;
    resumoHorario.textContent = horarioVal;
    resumoLocal.textContent = localVal;
    resumoObs.textContent = obsVal ? obsVal : "Nenhuma observação.";

    // Alterna a exibição dos cards aplicando a animação de fade-in no sucesso
    formCard.classList.add('hidden');
    sucessoCard.classList.remove('hidden');
    sucessoCard.classList.add('fade-in');
});