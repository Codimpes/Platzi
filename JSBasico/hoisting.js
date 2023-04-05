//declarar una variable
var miNombre;
//inicializar
miNombre = "Jeyson";

// ambas al tiempo
var miApellido = "Umaña";

//hoisting

console.log(miVariable);

var miVariable = "Mi variable";

// Hoisting es utilizar la variable o la función antes de declararla o inicializarla
// Si cuando se llama a la función una variable no ha sido declarada y inicializada entonces javaScript nos va dar el valor de esta variable como undefined. Por eso es buena practica definir las funciones en el comienzo del codigo para cuando se llamen las variables siempre esten definidas.
hey();

function hey() {
    console.log("Hola " + miNombre);
}