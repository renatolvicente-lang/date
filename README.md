#  Convite para Sair

Um site simples, responsivo e interativo desenvolvido com **HTML, CSS e JavaScript puro**, criado com o objetivo de proporcionar uma experiência divertida ao convidar alguém para sair.

## Sobre o projeto

O projeto consiste em uma pequena aplicação web composta por duas páginas. Na primeira, o usuário recebe um convite para sair e pode responder entre as opções **"Sim"** ou **"Não"**. Caso escolha **"Não"**, o site exibe uma sequência de mensagens de confirmação em tom descontraído antes de manter o usuário na página inicial. Ao selecionar **"Sim"**, o usuário é direcionado para uma segunda página, onde pode informar a data, o horário, o local e observações sobre o encontro por meio de um formulário.

Após o envio, os dados são apresentados na própria página em uma mensagem de confirmação, sem necessidade de recarregar o navegador ou utilizar banco de dados.

## Funcionalidades

* Página inicial com convite interativo.
* Botões de resposta "Sim" e "Não".
* Sequência de confirmações ao selecionar "Não".
* Redirecionamento para a página de agendamento ao selecionar "Sim".
* Formulário para definir:

  * Data;
  * Horário;
  * Local;
  * Observações.
* Exibição de um resumo do encontro após o envio do formulário.
* Layout responsivo para computadores, tablets e smartphones.
* Interface moderna com animações suaves.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6)

## Estrutura do projeto

```text
├── index.html
├── agendamento.html
├── css/
│   └── style.css
├── js/
│   ├── index.js
│   └── agendamento.js
└── assets/
```

## Desenvolvimento

O projeto foi desenvolvido utilizando apenas tecnologias nativas da web, sem o uso de frameworks ou bibliotecas externas para a lógica da aplicação. A estrutura foi organizada separando HTML, CSS e JavaScript em arquivos distintos, facilitando a manutenção e a organização do código.

Durante o desenvolvimento, foi priorizada a criação de uma interface simples, responsiva e intuitiva, utilizando Flexbox para o posicionamento dos elementos, animações em CSS para tornar a navegação mais agradável e JavaScript para controlar as interações entre as páginas e o comportamento dos botões.

O formulário da página de agendamento foi implementado com validação básica e manipulação do DOM para exibir os dados informados pelo usuário sem recarregar a página.

## Como executar

1. Clone este repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto.

3. Coloque o id de um forms do Formspree.

4. Abra o arquivo `index.html` em qualquer navegador moderno.

Não é necessário instalar dependências ou executar um servidor.

## Objetivo

Este projeto foi desenvolvido com fins de aprendizado, praticando conceitos de desenvolvimento front-end, manipulação do DOM, eventos em JavaScript, organização de arquivos e criação de interfaces responsivas.

## Licença

Este projeto está disponível para fins de estudo e aprendizado.
