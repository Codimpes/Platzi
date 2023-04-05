var miNombre = "Diego";

// scope global está disponible para todas las funciones y todo el codigo.

// scope local es las variables que tiene una función lo local puede acceder a lo global pero lo global no puede acceder a lo local.

function nombre() {
    var miApellido = "De Granda";
    console.log(miNombre + " " + miApellido);
}