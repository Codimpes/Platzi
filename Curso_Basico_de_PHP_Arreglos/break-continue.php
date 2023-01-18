<?php
$tiendita_de_cafes = array(
    "Americano" => 20,
    "Latte" => 25,
    "Recalentado" => 10,
    "Capuccino" => 27.5,
    "Mocca" => 24
);

foreach ($tiendita_de_cafes as $cafe => $price) {

    if ($cafe == "Recalentado") {
        continue;
    }
    echo "Actualmente encontre al cafe $cafe \n";
    if ($cafe == "Latte") {
        echo "Encontramos a latte \n";
        break;
    }
}
echo "\n";