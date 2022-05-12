const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todo"

let toDoArr = [];

function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoArr));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    toDoArr = toDoArr.filter(toDo => toDo.id != parseInt(li.id));
    saveToDo();
}

function paintToDo(newToDo) {
    // console.log("i will paint", newToDo);
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const btnDelete = document.createElement("button");

    btnDelete.innerText = "❌";
    btnDelete.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(btnDelete);

    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    };

    toDoArr.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
    // console.log(newToDo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODO_KEY);
// console.log(savedToDo);
if (savedToDo !== null) {
    const parsedToDo = JSON.parse(savedToDo);
    toDoArr = parsedToDo;
    // console.log(parsedToDo);
    parsedToDo.forEach(paintToDo);
}

function filter() {

}