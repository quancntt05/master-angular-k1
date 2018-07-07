function hello(person) {
    var firstName = person.firstName, lastName = person.lastName, birthday = person.birthday;
    console.log(firstName, lastName, birthday);
}
var person = {
    firstName: 'Nghia',
    lastName: 'Tran',
    age: 18
};
hello(person);
