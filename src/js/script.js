const formulario = document.getElementById("formulario");
const inputsRequeridos = document.querySelectorAll(".requerido"); /* array */
const spans = document.querySelectorAll(".span-requerido"); /* array */
const btnEnviar = document.getElementById("btn-enviar")

inputsRequeridos.forEach(function (input, indice) {
    input.addEventListener('input', () => {

        if (input.value === "") {
            setarErro(indice)
        } else {
            removerErro(indice)
        }
    })
})

function setarErro(indice) {
    inputsRequeridos[indice].classList.add("campo-vazio");
    inputsRequeridos[indice].classList.remove("campo-preenchido");
    spans[indice].classList.remove("sem-erro");
    spans[indice].classList.add("erro");
}

function removerErro(indice) {
    inputsRequeridos[indice].classList.remove("campo-vazio");
    inputsRequeridos[indice].classList.add("campo-preenchido");
    spans[indice].classList.remove("erro");
    spans[indice].classList.add("sem-erro");
}