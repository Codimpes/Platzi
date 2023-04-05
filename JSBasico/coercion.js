// coerción forma en la cual cambiamos el tipo de valor de un valor.
// Coerción explicita nosotros la provocamos y implicita cuando el lenguaje lo hace.


// Coerción implicita 
var a = 4 + "7";
var b = 4 * "7";


//Coerción explicita

var c = 20;

var d = a + "";

var e = String(c);
console.log(e);

var f = Number(e);