// Store elements in variables 

var button = document.getElementById("enter");
var clear = document.getElementById("clear");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var toDoList = document.querySelector(".List");



//CREATING NEW ITEM IN LIST
// Check if the input is not empty

function inputLength() {
    return input.value.length;
}

//Create new item and restore input to default
function createListElement() {
    //create div
    var toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    //Create LI and append input value + done button + trash button
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    toDoDiv.appendChild(li);
    input.value = "";
    //create complete button
    var completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.classList.add("fas");
    completeBtn.classList.add("fa-check");
    toDoDiv.appendChild(completeBtn);
    //create trash button
    var trashBtn = document.createElement("button");
    trashBtn.classList.add("trashBtn")
    trashBtn.classList.add("fas")
    trashBtn.classList.add("fa-trash-alt")
    toDoDiv.appendChild(trashBtn);
    //Append to list
    ul.appendChild(toDoDiv);

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



//CLEARING ENTIRE LIST

//Clear Entire list function
function clearList() {
    ul.innerHTML = "";
}

//Clear entire list listner
clear.addEventListener("click", clearList);



//function to delete single item or cross off item

//delete item
function deleteCheck(e) {
    item = e.target;
    if (item.classList[0] === "trashBtn") {
        var todo = item.parentElement;
        todo.remove()
    }
    //mark as done
    if (item.classList[0] === "completeBtn") {
        var toDoLi = item.parentElement.childNodes;
        var toDoAll = item.parentElement;
        toDoLi[0].classList.add("done");
        toDoAll.classList.toggle("done2");

    }

}
//Event listener
toDoList.addEventListener("click", deleteCheck);