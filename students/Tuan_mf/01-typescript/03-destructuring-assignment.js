function hello1(person) {
    var firstName = person.firstName, lastName = person.lastName, age = person.age;
    console.log(firstName, lastName, ",Tu\u1ED5i:" + age);
}
var person = {
    firstName: 'Tuấn',
    lastName: 'Trần',
    age: 21,
};
hello1(person);
