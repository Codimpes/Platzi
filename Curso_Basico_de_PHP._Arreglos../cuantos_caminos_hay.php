<?php

$numero_de_tienda = 1000000;

$anterior = 0;

$actual = 1;

for ($i=2; $i <= $numero_de_tienda; $i++) { 
    $temporal = $actual;
    $actual += $anterior;
    $anterior = $temporal;

}

echo "Hay $actual formas de llegar.";