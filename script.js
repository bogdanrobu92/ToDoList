// Store elements in variables 

var button = document.getElementById("enter");
var clear = document.getElementById("clear");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


//CREATING NEW ITEM IN LIST

// Check if the input is not empty

function inputLength() {
    return input.value.length;
}

//Create new item and restore input to default
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// ADDING ITEMS AFTER CLICK

// Add item after click function

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

//Add item after click listner 
button.addEventListener("click", addListAfterClick);


//ADDING ITEMS AFTER ENTER

// Add item after Enter Function
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

//Add item after enter Listener 
input.addEventListener("keypress", addListAfterKeypress);


//MARKING AS DONE (line-thorugh)
// Inspired by https://github.com/drood87/shoppingList

//Mark as done function

function markAsDone(evt) {
    if (evt.target.tagName === "LI") {
        evt.target.classList.toggle("Done");
    }
}


//Mark as done listener
ul.addEventListener("click", markAsDone);



//CLEARING ENTIRE LIST

//Clear Entire list function
function clearList() {
    ul.innerHTML = "";
}

//Clear entire list listner
clear.addEventListener("click", clearList);