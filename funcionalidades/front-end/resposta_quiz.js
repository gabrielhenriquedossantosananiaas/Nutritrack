const inputcerto = document.querySelector("#input_1");
const inputerrado = document.querySelector("#input_2");
const inputerrado2 = document.querySelector("#input_3");
const botaocontinuar = document.querySelector("#input_4");
const qntacerto = document.querySelector("#qntacerto");

function certaresposta(){
    inputcerto.classList.add('Rcerto');
    qntacerto.innerHTML = "1/10";
    botaocontinuar.classList.remove('invisivel');

}

function respostaerrada(){
    inputerrado.classList.add('Rerrado');
}

function respostaerrada2(){
    inputerrado2.classList.add('Rerrado');
}