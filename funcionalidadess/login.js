function homem() {
    const idade = document.querySelector(".idade").value;
    const altura = document.querySelector(".altura").value;
    const peso = document.querySelector(".peso").value;
    
    if (idade && altura && peso) {
        const dieta = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
        localStorage.setItem("dieta", dieta);
    }
}

function mulher() {
    const idade = document.querySelector(".idade").value;
    const altura = document.querySelector(".altura").value;
    const peso = document.querySelector(".peso").value;

    if (idade && altura && peso) {
        const dieta = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
        localStorage.setItem("dieta", dieta);
    }
}

function mostrar() {
    const dietaa = parseFloat(localStorage.getItem("dieta"));
    const select = document.getElementById("selecionar");
    const textoSLC = select.options[select.selectedIndex].text;
    let calculo = 0;

    if (textoSLC === "Sedentary") { 
        calculo = dietaa * 1.2;
    } else if (textoSLC === "Lightly active") {
        calculo = dietaa * 1.375;
    } else if (textoSLC === "Moderately active") {
        calculo = dietaa * 1.55;
    } else if (textoSLC === "Very active") {
        calculo = dietaa * 1.725;
    } else if (textoSLC === "Extremely active") {
        calculo = dietaa * 1.9;
    } 
    


        localStorage.setItem("calculoFinal", calculo);
    }

function perder() {
    const calculo2 = parseFloat(localStorage.getItem("calculoFinal"));
    if (calculo2) {
        const resultado = calculo2 - 500;
        localStorage.setItem("resultado", resultado);
    } 
}

function ganhar() {
    const calculo2 = parseFloat(localStorage.getItem("calculoFinal"));
    if (calculo2) {
        const resultado = calculo2 + 500;

        localStorage.setItem("resultado", resultado);
    } 
}

function manter() {
    const calculo2 = parseFloat(localStorage.getItem("calculoFinal"));
    if (calculo2) {
        localStorage.setItem("resultado", calculo2);
    }
}
