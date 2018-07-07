var that = this;
console.log(this);
// function clickme() {
//     console.log(this);
//     console.log(that === this); //this va that không bằng nhau do this= <button> còn that bằng window.... chạy chương trình sẽ thấy
// }
var clickme = function () {
    var persons = [
        {
            firstName: 'Nghia',
            lastName: 'Tran'
        },
        {
            firstName: 'Tuan',
            lastName: 'Tran'
        },
        {
            firstName: 'Hoang',
            lastName: 'Tran'
        },
    ];
    var newPersons = persons.map(function (e) { return e.firstName; });
    console.log(newPersons);
};
document.getElementById("btn1").addEventListener('click', clickme);
