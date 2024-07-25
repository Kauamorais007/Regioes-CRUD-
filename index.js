const prompt = require("prompt-sync")();

const { criar, atualizar, remover, listar, perguntaOperacao } = require("./estados.js");

while (true) {
    perguntaOperacao();
      let opcao = Number(prompt());

  switch (opcao) {
    case 1:
      criar();
      break;
    case 2:
      atualizar();
      break;
    case 3:
      remover();
      break;
    case 4:
      listar();
      break;
    case 5:
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}