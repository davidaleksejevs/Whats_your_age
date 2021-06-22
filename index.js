var birthDate = parseFloat(document.querySelector('#number').value);
var today = new Date().getFullYear();
function getAge() {
    const userAge = today - birthDate;
    alert('Your age is ' + userAge)
}

const myForm = document.getElementById('myForm');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getAge();
})
 