// declarando
//class User {}

//instancia de una clase
//const newUser = new User();


/* clase con metodo
class user {
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());
*/

/* Clases de constructor
class user {
    constructor() {
        console.log('Nuevo usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const jeyson = new user();
*/

/*this Hace referencia al elemento padre que lo contiene

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}


const user1 = new user('Jeyson');

console.log(user1.greeting());*/

// setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    //metodos privados
    set #uAge(n) {
        this.age = n
    }
}

const bebeloper1 = new user('Jeyson', 30);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 29);
console.log(bebeloper1.uAge);

