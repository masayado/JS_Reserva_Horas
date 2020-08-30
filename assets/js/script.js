//variables

//formulario
var form = document.getElementById("form");

//inputs 

var rut = document.getElementById("rut").value;
var nombres = document.getElementById("nombres").value;
var apellidos = document.getElementById("apellidos").value;
var edad = document.getElementById("edad").value;
var correo = document.getElementById("correo").value;
var especialidad = document.getElementById("especialidad").value;
var fecha = document.getElementById("fecha").value;
var hora = document.getElementById("horas").value;

form.addEventListener("submit", e => {
    e.preventDefault();
    validacionRut();
});

//VALIDACIONES

//validación rut

validacionRut = () => {
    var rut = document.getElementById("rut").value;
    var regExRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/gm;
        if(rut === ""){
            alert("Por favor, ingrese el rut del paciente.");
            return false;
        }
        else if(rut.match(regExRut)){
            console.log(rut);
            return true;
        }
        else{
            alert("El rut debe ser ingresado con puntos y guión.\nFormato 11.111.111-1")
        }
};

//validación nombres

validacionNombres = () => {
    var nombres = document.getElementById("nombres").value;
    var regExNombres = /[a-zA-Z ]{3,35}/gm;
        if(nombres === ""){
            alert("Por favor, ingrese los nombres del paciente.");
            return false;
        }
        else if(nombres.match(regExNombres)){
            console.log(nombres);
            return true;
        }
        else{
            alert("Nombres inválidos. Debe ingresar sólo letras")
        }
};

//Validación apellidos

validacionApellidos = () => {
    var apellidos = document.getElementById("apellidos").value;
    var regExApellidos = /[a-zA-Z ]{3,35}/gm;
        if(apellidos === ""){
            alert("Por favor, ingrese los apellidos del paciente.");
            return false;
        }
        else if(apellidos.match(regExApellidos)){
            console.log(apellidos);
            return true;
        }
        else{
            alert("Apellidos inválidos. Debe ingresar sólo letras")
        }
};

//Validación edad

validacionEdad = () => {
    var edad = document.getElementById("edad").value;
    var regExEdad = /^\d{1,3}$/gm;
        if(edad === ""){
            alert("Por favor, ingrese edad del paciente.");
            return false;
        }
        else if(edad.match(regExEdad)){
            console.log(edad);
            return true;
        }
        else{
            alert("Edad inválida. Debe ingresar sólo números")
        }
};

//Validacion correo

validacionCorreo = () => {
    var correo = document.getElementById("correo").value;
    var regExCorreo = /^\w+[@]\w+\.\D{2,3}$/;
        if(correo === ""){
            alert("Por favor, ingrese correo electrónico del paciente.");
            return false;
        }
        else if(correo.match(regExCorreo)){
            console.log(correo);
            return true;
        }
        else{
            alert("Correo inválido. Ingrese formato de correo electrónico válido")
        }
};

//Validacion especialidad

validacionEspecialidad = () => {
    var especialidad = document.getElementById("especialidad").value;
    if (especialidad.value === "0"){
        alert ("Por favor, escoga especialidad médica")
    }
    else (especialidad.value != "0"){
        console.log(especialidad);
    }
};

//Validacion fecha de atención

validacionFecha = () => {
    var fecha = document.getElementById("fecha").value;
    var regExFecha = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
        if (fecha === ""){
            alert ("Por favor, ingrese la fecha en la cual desea reservar su hora")
            return false;
        }
        else if(fecha.match(regExFecha)){
            console.log(fecha);
            return true;
        }
        else {
            alert ("Fecha inválida. Ingrese fecha con forma dd/mm/aaaa\nEjemplo 13/11/2020")
        }
};

//Validacion horas de atención

validacionHoras = () => {
    var hora = document.getElementById("horas").value;
    if (hora.value === "0"){
        alert ("Por favor, escoga hora de atención")
    }
    else (hora.value != "0"){
        console.log(hora);
    }
};

//limpiar inputs después de enviar formulario

limpiarInputs = () => {

var rut = document.getElementById("rut").value;
var nombres = document.getElementById("nombres").value;
var apellidos = document.getElementById("apellidos").value;
var edad = document.getElementById("edad").value;
var correo = document.getElementById("correo").value;
var especialidad = document.getElementById("especialidad").value;
var fecha = document.getElementById("fecha").value;
var hora = document.getElementById("horas").value;

rut.value="";
nombres.value="";
apellidos.value="";
edad.value="";
correo.value="";
especialidad.value="0";
fecha.value="";
hora.value="0";

};