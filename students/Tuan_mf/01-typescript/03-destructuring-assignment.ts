function hello1(person) {
    var { firstName, lastName, age } = person;
    console.log(firstName, lastName,`,Tuổi:${age}`);
}

var person = {
    firstName: 'Tuấn',
    lastName: 'Trần',
    age: 21,
}
hello1(person);