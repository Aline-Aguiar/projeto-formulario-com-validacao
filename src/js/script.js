const formulario = document.getElementById("formulario");
const campos = document.querySelectorAll(".requerido");
const spans = document.querySelectorAll(".span-requerido");

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;