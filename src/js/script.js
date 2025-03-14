const formulario = document.getElementById("formulario");
const inputsRequeridos = document.querySelectorAll(".requerido"); /* array */
const spans = document.querySelectorAll(".span-requerido"); /* array */
const btnEnviar = document.getElementById("btn-enviar")

// let inputAtual = 0;

inputsRequeridos.forEach(function (input,indice){
    input.addEventListener('input', () => {

        if (input.value === "") {
            inputsRequeridos[indice].classList.add("campo-vazio");
            inputsRequeridos[indice].classList.add("campo-vazio");
            spans[indice].classList.remove("sem-erro");
            spans[indice].classList.add("erro");
        } else {
            inputsRequeridos[indice].classList.remove("campo-vazio");
            spans[indice].classList.remove("erro");
            spans[indice].classList.add("sem-erro");
        }
    })
})

// function setarErro() {
//     inputsRequeridos[inputAtual].classList.add("campo-vazio");
//     spans[inputAtual].classList.remove("sem-erro");
//     spans[inputAtual].classList.add("erro");
// }

// function removerErro() {
//     inputsRequeridos[inputAtual].classList.remove("campo-vazio");
//     spans[inputAtual].classList.remove("erro");
//     spans[inputAtual].classList.add("sem-erro");
// }