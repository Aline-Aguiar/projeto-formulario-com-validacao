const inputsRequeridos = document.querySelectorAll(".requerido");
const spans = document.querySelectorAll(".span-requerido");
const btnEnviar = document.getElementById("btn-enviar")

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault()

    inputsRequeridos.forEach(function (input, indice) {
        if (input.value.trim() !== "") {
            removerErro(indice)
        } else {
            setarErro(indice)
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