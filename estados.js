

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
    let estado = {
        uf:undefined,
        pais: undefined,
    }
estado.uf = prompt("Qual o UF?")
let resposta

while(true){
    resposta = prompt("Qual o pais")
    if(resposta == "ok")
        break;
    estado.pais.push(resposta)
    console.log('Estado criado')
    return estado
}
}


function criar(){
    let estado = criarAtualizar();
    estado.uf = prompt("Qual o UF?")

let resposta
while(true){
    resposta = prompt("Qual o pais")
    if(resposta == "ok")
        break;
    estado.pais.push(resposta)
    console.log('Estado criado')
    return estado
}
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