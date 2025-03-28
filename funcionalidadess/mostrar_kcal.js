
function dietakcal(){
    const dieta_dashboard = document.querySelector(".dieta_dash")
    const inserirvalordieta = parseFloat(localStorage.getItem("resultado"));
    dieta_dashboard.innerHTML = inserirvalordieta
}

function ver(){
    const kcal = document.querySelector(".dieta_dash")
    dieta_dashboard = document.querySelector(".dieta_dash")
    const inserirvalordieta = parseFloat(localStorage.getItem("resultado"));
    kcal.innerHTML = inserirvalordieta.toFixed(2)
    
}