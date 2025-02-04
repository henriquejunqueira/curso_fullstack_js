let nomePessoaMaisVelha = prompt('Qual o nome da pessoa mais velha? ');
let idadePessoaMaisVelha = prompt('Qual a idade da pessoa mais velha? ');
let nomePessoaMaisNova = prompt('Qual o nome da pessoa mais nova? ');
let idadePessoaMaisNova = prompt('Qual a idade da pessoa mais nova? ');

let diferencaIdade = idadePessoaMaisVelha - idadePessoaMaisNova;

alert(
  'Pessoa mais velha: ' +
    nomePessoaMaisVelha +
    '\nIdade: ' +
    idadePessoaMaisVelha +
    '\n\nPessoa mais nova: ' +
    nomePessoaMaisNova +
    '\nIdade: ' +
    idadePessoaMaisNova +
    '\n\nA diferença de idade entre ' +
    nomePessoaMaisVelha +
    ' e ' +
    nomePessoaMaisNova +
    ' é de ' +
    diferencaIdade +
    ' ano(s)'
);
