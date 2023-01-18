<?php

echo "Cuantas donaciones tienes en tu cuenta de Twitch: ";
//readline(Leer datos de usuario);
fscanf(STDIN, "%s", $donaciones);
if ((int) $donaciones >= 100) {
    echo "Ok puedes retirar tus $donaciones dolares.";
}
else {
    echo "Debes de tener como minimo 100 dolares para poder retirar tus donaciones.";
}