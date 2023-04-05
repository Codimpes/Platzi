var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

// Encontrar el primer articulo y filter trae todos los que coincidan.
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});

// for each
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// some nos regresa una validación de verdadero y falso de si existe al menos uno que cumpla la condición.

var articulosBaratos = articulos.some(function(articulo){
    return articulos.costo <= 700;
});