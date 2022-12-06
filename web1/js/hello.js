const hello = () => {
    alert("Hello");
};

//hello(); // llamar funcion

function prompta(){
    let person = prompt("Enter Name", "Messi");
    document.getElementById("test").innerHTML = "Hello, " + person;
    console.log(person);
}

function testy(){
    console.log("Hello");
}

function confirma(){
    let str = confirm("Are you sure?");
    console.log(str);
}

let user = "John", age = 25, message = "hello";
console.log(age);
console.log(typeof(user));

const num = 10;
console.log(num);
let num1 = 10;
num1 = 11
console.log(num1);

console.log(`La respuesta es ${1+2}`) // Template literals

