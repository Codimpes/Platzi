<?php

$data = 'Estudio PHP <br>';
echo $data[0];

$post = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto ipsum voluptates iusto dignissimos. Consequatur ut cumque exercitationem harum nesciunt ipsa aperiam, dolores veritatis quod optio. Soluta sunt ipsam magni';

$extract = substr($post, 0, 20);
echo "$extract... [ver más] <br>";

$data = 'javascript, php, laravel';
$tags = explode(', ', $data);
echo "<pre>";
var_dump($tags);

$courses = ['javascript', 'php', 'laravel'];
echo implode(", ", $courses);


$course = "    Curso de PHP    ";
$course = trim($course);

echo "<pre>";

echo $course;