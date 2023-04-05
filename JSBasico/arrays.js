// Los arrays son estructuras de datos.

// crear array
var frutas = ["Manazana", "Platáno", "Cereza", "Fresa"];

// Longitud del array cuantos elementos hay
console.log(frutas.length);

// acceder a los elementos
console.log(frutas[0]); // accede a Manzana

// agrega un elemento al final del array
var masFrutas = frutas.push("Uvas");

// Eliminar el ultimo elemento del array.

var ultimos = frutas.pop("Uvas");

//Agregar un elemento al inicio
var nuevaLongitud = frutas.unshift("Uvas");

//Eliminar un elemento de la primera posición
var primero = frutas.shift();

// traer la posición del elemento
var posicion = frutas.indexOf("Cereza");