<?php

$asientos_disponibles = 4;
$es_hijo_tom_holland = true;

if ($asientos_disponibles > 0) {
    echo "Puedes ver la pelicula de Spidey \n";
}
else if ($es_hijo_tom_holland) {
    echo "No te creo pero puedes ver la pelicula \n";
}
else {
    echo "Lo sentimos, te va tocar spoliarte. \n";
}

echo "\n";