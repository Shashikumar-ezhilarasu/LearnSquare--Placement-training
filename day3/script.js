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