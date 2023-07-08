<?php

/*
function greet() {

}*/

/*
$greet = function ($name) // variable que requiere lógica 
{
    return "Hola, $name";
};

echo $greet('Jeyson');*/

function greet(Closure $lang, $name) {
    return $lang($name);
}

$es = function ($name) {
    return "Hola, $name <br> ";
};

$en = function ($name) {
    return "Hello, $name <br>";
};


echo greet($es, 'Linda');

echo greet($en, 'Linda');