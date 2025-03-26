const camposFormulario = document.querySelectorAll(".requerido");
const botaoEnviar = document.querySelector(".btn-enviar")

botaoEnviar.addEventListener('click',(e)=>{
    e.preventDefault()

    camposFormulario.forEach((input)=>{
        if(input.value){
            input.classList.add('campo-preenchido')
            input.nextElementSibling.classList.remove('erro')
        }else{
            input.classList.remove('campo-preenchido')
            input.classList.add('campo-vazio')
            input.nextElementSibling.classList.add('erro')
        }
    })
})