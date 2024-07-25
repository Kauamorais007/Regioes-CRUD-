

const prompt = require("prompt-sync")();
const estados =[];
function perguntaOperacao(){
    console.log(`Qual operação deseja fazer?
    [1] Inserir 
    [2] Remover
    [3] Alterar
    [4] Listar`)
}
function criarAtualizar(){
    const nome = prompt("Digite o npme do estado: ")
    const uf = prompt("Digite o Uf: ").toUpperCase()
    estados.push({nome, uf})
let resposta
        
    console.log('Estado criado')
    return estados
}



function criar(){
    let estado = criarAtualizar();
        const nome = prompt("Digite o npme do estado: ")
        const uf = prompt("Digite o Uf: ").toUpperCase()
        estados.push({nome, uf})
    let resposta
    console.log('Estado criado')
    return estado
}


function listar(){
   estados.forEach(function(estado, indice) {
        console.log(`${indice + 1}. ${estado}`)
    })
}

function atualizar(){
    listar()
    console.log("Qual indice voce deseja atualizar:");
    let estado = criarAtualizar()
    estado[--indice] = estado

}


const remover = () => {
    listar();
  
    let indice = prompt("Qual indice sera removido? ");
  
    estados.splice(--indice, 1);
  
    console.log("Removido");
  };





module.exports = {
    perguntaOperacao,
    remover,
    atualizar,
    listar,
    criar,
    criarAtualizar
  }