<?php

$edades = [18, 22, 40, 34];

// count 
echo count($edades);

// array_push
array_push($edades, 13);

var_dump($edades);


$esto_no_es_un_arreglo = "";

var_dump(is_array($esto_no_es_un_arreglo));

// explode 
$lista_de_frutas = "fresa,cereza,manzana";
$lista_de_frutas_array = explode(",",$lista_de_frutas);
var_dump($lista_de_frutas_array);

$lista_de_frutas = ['fresa','cereza','namzana'];
$lista_de_frutas_array = implode(",",$lista_de_frutas);
echo $lista_de_frutas_array;

echo "\n";