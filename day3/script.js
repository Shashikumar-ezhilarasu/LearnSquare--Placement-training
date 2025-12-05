function ADD() {
    const nameContainer = document.getElementById("nameContainer");
    document.getElementById("regContainer").style.display = "block";
    document.getElementById("nameContainer").style.textDecoration = "line-through";

    
}

function remove() {
    const regContainer = document.getElementById("regContainer");
    document.getElementById("nameContainer").style.display = "none";
    document.getElementById("regContainer").style.display = "block";

}

function both() {
    const profileContainer = document.getElementById("profileContainer");
    document.getElementById("nameContainer").style.display = "none";
    document.getElementById("regContainer").style.display = "block";
}


let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
let Number = Math.ceil(Math.random() * 10);
console.log(Number)
function check(){
    const nameContainer = document.getElementById("nameContainer");
    let number = document.getElementById("number").value;
    // let Number = Math.ceil(Math.random() * 10);
    // console.log(Number)
    if(number == Number){
        nameContainer.style.display = "none";
        document.getElementById("nameContainer").style.display = "block";
        document.getElementById("result").style.display ="block";

    }
    else{
        console.log("Incorrect Number");
        
    };  
}

let options = {
    method: 'GET',
};

fetch('https://gorest.co.in/public/v2/users', options)
    .then(response => response.json())
    .then(function(jsonData) {
        console.log(jsonData);
    })
    .catch(err => console.error('error: ' + err));
