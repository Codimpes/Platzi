var lastName = 'Jeyson';
lastName = 'Eduardo';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // solo se pueden acceder dentro del bloque
        const fruit3 = 'Banana';// block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();