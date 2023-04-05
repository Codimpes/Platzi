// Declarativas

function miFuncion() {
    return 3;
}

miFuncion();

// Expresiva

var miFuncion1 = function(a,b){
    return a + b;
};

miFuncion1();


//imprimer una variable en un string
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

// regresar el valor con return
function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

/*En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar. */