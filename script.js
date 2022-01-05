// Store elements in variables 

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// Check if the input is not empty

function inputLength() {
    return input.value.length;
}


//Create new item and restore input to default
// MAYBE I CAN ADD and random ID for each element 
//AND COMPARE THE ID WITH an i so i can turn class done on only for that i
// with .setAtribute("id") and a function that assigns a random number only once
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// Add item after click

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// Add item after Enter

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
// Mark item as done
function turnDoneOn() {
    ul.classList.toggle("done");
}

//listen to click on button
button.addEventListener("click", addListAfterClick);

//listen to Enter Press
input.addEventListener("keypress", addListAfterKeypress);

//liste to click on list item
ul.addEventListener("click", turnDoneOn)