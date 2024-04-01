

var area = document.getElementById('area')


function entrar(){

var nome = prompt('Digite seu Nome');

if(nome === '' || nome === null){
alert("Insira Seu Nome Para Continuar")
area.innerHTML= "clique no botão e tente novamente"

}
else{
area.innerHTML = "Bem vindo " + nome + " ";

let Saair = document.createElement("button")
Saair.innerText = "Sair"
area.appendChild(Saair)
Saair.onclick = sair;

}
}

function sair(){
alert("Volte Sempre")
area.innerText = "Você Saiu!"

}