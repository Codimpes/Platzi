<?php
    $escuela = array(

        array(
            "Nombre" => "Michijose",
            "Ocupacion" => "Developer increible",
            "Color" => "Naranja con rayitas",
            "Comidas" => array(
                "Favoritas" => "Lasaña, Atún",
                "NoFavoritas" => "Fresas, Cacahuates"
            )
            ),
        array(
            "Nombre" => "Michisancio",
            "Ocupacion" => "jQuery Developer",
            "Color" => "Blanco con manchitas negras",
            "Comidas" => array(
                "Favoritas" => "Pescado, Pollo",
                "NoFavoritas" => "Atún"
                )
                ),
        array(
            "Nombre" => "Michijose",
            "Ocupacion" => "DPro en PHP",
            "Color" => "Blanco",
            "Comidas" => array(
            "Favoritas" => "Pizza",
            "NoFavoritas" => "Pescado"
                    )
                    ),
                           
    );

    $michisancio = $escuela[1];

    echo "Las comidas favoritas de Michisancio son " .
    $michisancio[1]['Comidas']['Favoritas'];

    

    echo "\n";