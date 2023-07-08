<?php

require __DIR__ . '/vendor/autoload.php';


var_dump(App\Validate::email('i@prueba.com'));
var_dump(App\Validate::url('https://platzi.com'));