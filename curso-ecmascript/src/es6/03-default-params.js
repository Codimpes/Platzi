function newUser(name, age, country) {
    var name = name || 'Jeyson';
    var age = age || 30;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser()
newUser('Jeimi', 29, 'CO');

function newAdmin(name = 'Jeyson', age = 30, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 25, 'UA');