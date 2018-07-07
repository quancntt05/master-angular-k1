function hello(person) {
    var { firstName, lastName, birthday } = person;
    console.log(firstName, lastName, birthday);
}

var person = {
    firstName: 'Nghia',
    lastName: 'Tran',
    age: 18
}

hello(person);