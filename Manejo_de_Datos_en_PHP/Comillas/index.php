<?php
//Comillas simples
echo 'Un texto de una linea
varias líneas
comilla simple \' backslash \\ continuar con más texto
$variable <br>';

$name = 'Jeyson';
//Comillas dobles
echo "Mi nombre es $name <br>";

$courses = [
    'backend' => [
        'PHP',
        'Laravel'
    ]
    ];

$courses1 = ['backend' => 'PHP'];

    //Imprimir una estructura compleja
    echo "{$courses['backend'][0]} <br>";

class User {
        public $name = 'Jeyson';
}

$user = new User;

echo "$user->name quiere aprender {$courses['backend'][0]} <br>";
echo "$user->name quiere aprender {$courses1['backend']} <br>";

$teacher = 'Jeyson';

$Jeyson = 'profesor y multimillonario';

echo "$teacher es {${$teacher}} <br>";

function getTeacher() 
{
    return 'teacher';
}

$teacher = 'Jeyson';

echo "{${getTeacher()}} enseña PHP <br>";

