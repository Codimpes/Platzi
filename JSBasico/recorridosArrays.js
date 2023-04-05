var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

// filter hace un nuevo array con los articulos que cumplieron está validación
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

// map me ayuda a mapear estos articulos
var nombreArticulos = articulos.map((articulo) => {
    return articulo.nombre;
});