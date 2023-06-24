// h1 {color: red;}
// .parrafito { ... }
// #pid { ... }
/*
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const pClass = document.getElementsByClassName('parrafito');
const pId = document.getElementById('pid');
const input = document.querySelector('input');
console.log({h1});
console.log({
    h1,
    p,
    pClass,
    pId,
    input,
});

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('pantalla', 'Cambio');
h1.classList.add('nuevaClase');
//h1.classList.remove('nuevaClase');
//h1.classList.toogle('nuevaClase');
//h1.classList.contains('nuevaClase');

input.value = 234;

const img = document.createElement('img');

img.setAttribute('src', 'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=300');

pId.append(img);
console.log({img});
//pId.innerHTML = "";
//pId.innerHTML = img.;
*/

const h1 = document.querySelector("h1");
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcu = document.querySelector('#btn-calcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');
form.addEventListener('submit', sumarEnSubmit);
//btnCalcu.addEventListener('click', btnOnClick);

/*function btnOnClick() {
    let sumaInputs = +input1.value + +input2.value;
    pResult.innerText = `Resultado: ${sumaInputs}`;
};*/

function sumarEnSubmit(event) {
    //console.log({event});
    event.preventDefault();
    let sumaInputs = +input1.value + +input2.value;
    pResult.innerText = `Resultado: ${sumaInputs}`;
};

