// siempre entra si la condición da como resultado true.
// else sucede si la condición del if no sucede.
if (a > b) {
    console.log("Hola");
} else {
    console.log("Soy false");
}

// Se pueden hacer más validaciones con el else if

if (a > b) {
    console.log("Hola");
} else if (a == b){
    console.log("Soy la segunda condición");
} else {
    console.log("Soy el else");
}

// Ejemplo

var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, será tu 1ra votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

//operador ternario
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";

function getRandomArbitrary() {
    return Math.floor(Math.random() * (2 - 0) + 0);
}

var valores = ["piedra", "papel", "tijera"];

function juego(valueUser) {
    var index = getRandomArbitrary();
    var valueCpu = valores[index];
    var resultado = "";
    if (valueUser == "tijera" && valueCpu == "piedra") {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Perdiste`;
    } else if (valueUser == "tijera" && valueCpu == "papel") {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Ganaste`;
    } else if (valueUser == "tijera" && valueCpu == "tijera") {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Empatados`;
    } else if (valueUser == "piedra" && valueCpu == "tijera") {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Ganaste`;
    } else if (valueUser == "piedra" && valueCpu == "papel") {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Perdiste`;
    } else if (valueUser == "piedra" && valueCpu == "piedra") {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Empatados`;
    } else if (valueUser == "papel" && valueCpu == "piedra") {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Ganaste`;
    } else if (valueUser == "papel" && valueCpu == "tijera") {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Perdiste`;
    } else {
        resultado = `User: ${valueUser} CPU: ${valueCpu} Resultado: Empatados`;
    }

    return resultado;
}