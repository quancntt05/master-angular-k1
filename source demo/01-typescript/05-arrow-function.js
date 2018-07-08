//var that = this;
console.log(this);
// function clickMe() {
//     console.log(this);
//     console.log(that === this);
// }
var clickMe = function () {
    // console.log(this);
    //console.log(that === this);
    var persons = [
        {
            firstName: 'Nghia',
            lastName: 'Tran'
        },
        {
            firstName: 'Quan',
            lastName: 'Le'
        },
        {
            firstName: 'Tuan',
            lastName: 'Tran'
        }
    ];
    var newPersons = persons.map(function (e) { return e.firstName; });
    console.log(newPersons);
};
document.getElementById('btn1').addEventListener('click', clickMe);
