// VARIABLES
let name = "Charlene";
let course = "BSIT";

// OUTPUT
document.getElementById("output").innerHTML =
    "Name: " + name + "<br>Course: " + course;

// BUTTON FUNCTION
function showAlert() {
    alert("Button clicked!");
}

// USER INPUT
document.getElementById("userInput").addEventListener("input", function() {
    document.getElementById("displayText").innerText = this.value;
});

// EVENT HANDLING
document.getElementById("changeBtn").addEventListener("click", function() {
    document.getElementById("changeText").innerText = "Text Changed!";
});