const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const vistaNombre = document.getElementById("vistaNombre");
const edad = document.getElementById("edad");
const estadoEdad = document.getElementById("estadoEdad");
const modalidad = document.getElementById("modalidad");
const infoModalidad = document.getElementById("infoModalidad");
const correo = document.getElementById("correo");
const ayudaCorreo = document.getElementById("ayudaCorreo");
const resultado = document.getElementById("resultado"); 

nombre.addEventListener("input", function () {

    if (nombre.value === "") {
        vistaNombre.textContent = "Ingrese su nombre.";
    } else {
        vistaNombre.textContent = "Participante: " + nombre.value + " | " + nombre.value.length + " caracteres";
    }
});

edad.addEventListener("input", function () {
    let edadUsuario = Number(edad.value);

    if (edadUsuario < 14 || edadUsuario > 100) {
        estadoEdad.textContent = "Edad fuera del rango.";
    } else{
        estadoEdad.textContent = "Edad válida";
    } 
}); 

modalidad.addEventListener("change", function () {

    if (modalidad.value === "presencial") {
        infoModalidad.textContent = "Seleccionaste la modalidad presencial.";
    } else if (modalidad.value === "virtual") {
        infoModalidad.textContent = "Seleccionaste la modalidad virtual.";
    } else {
        infoModalidad.textContent = "";
    }
});

correo.addEventListener("input", function () {

    ayudaCorreo.textContent = "Ingrese su correo electrónico: ";
    
});

correo.addEventListener("blur", function () {

    if (correo.value === "") {
        ayudaCorreo.textContent = "El correo es obligatorio.";
    } else {
        ayudaCorreo.textContent = "Correo registrado.";
    }
});

nivel.addEventListener("change", function () {

    if (nivel.value === "basico") {
        infoNivel.textContent = "Seleccionaste el nivel principiante.";
    } else if (nivel.value === "intermedio") {
        infoNivel.textContent = "Seleccionaste el nivel intermedio.";
    } else if (nivel.value === "avanzado") {
        infoNivel.textContent = "Seleccionaste el nivel avanzado.";
    } else {
        infoNivel.textContent = "";
    }
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulario enviado"); 
     let nombreUsuario = nombre.value;

    if (nombreUsuario.length >= 4) {
        mensaje.textContent = "Nombre válido.";
    } else {
        mensaje.textContent = "El nombre debe tener mínimo 4 caracteres.";
    }
});