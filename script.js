// Store elements in variables 

var button = document.getElementById("enter");
var clear = document.getElementById("clear");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var todoList = document.querySelector(".toDoList");
var filterOption = document.querySelector(".filter-todo")



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
    ///ADD TODO TO LOCAL STORAGE
    saveLocalTodos(input.value);
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
    localStorage.setItem("todos", JSON.stringify([]));
}

//Clear entire list listner
clear.addEventListener("click", clearList);



//function to delete single item or cross off item

//delete item
function deleteCheck(e) {
    item = e.target;
    if (item.classList[0] === "trashBtn") {
        var todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove()
    }
    //mark as done
    if (item.classList[0] === "completeBtn") {
        var toDoLi = item.parentElement.childNodes;
        var toDoAll = item.parentElement;
        toDoLi[0].classList.toggle("done");
        toDoAll.classList.toggle("done2");

    }

}
//Event listener
todoList.addEventListener("click", deleteCheck);


// filtering
// filtering function

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        const mStyle = todo.style;
        if (mStyle != undefined && mStyle != null) {
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('done2')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "inProgress":
                    if (todo.classList.contains('done2')) {
                        mStyle.display = 'none';
                    } else {
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    })
}

// fitering eventlistener
filterOption.addEventListener("click", filterTodo);

//Check if i have it in LOCAL STORAGE, IF NOT CREATE

function saveLocalTodos(todo) {
    //CHECK if i already have stuff saved
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


///GET STUFF FROM LOCAL STORAGE

function getTodos() {
    let todos;
    //CHECK if i already have stuff saved
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        //create div
        var toDoDiv = document.createElement("div");
        toDoDiv.classList.add("todo");
        //Create LI and append input value + done button + trash button
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(todo));
        toDoDiv.appendChild(li);
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
    });
};

//Event Listener for Local Storage
document.addEventListener("DOMContentLoaded", getTodos);


///REMOVE FROM LOCAL STORAGE

function removeLocalTodos(todo) {
    let todos;
    //CHECK if i already have stuff saved
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}