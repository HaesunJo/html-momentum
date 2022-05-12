const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USER_NAME_KEY = "username";

function onLoginSubmit(event) {
    // console.log(loginInput.value);
    // console.log("clicked");

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USER_NAME_KEY, userName);

    paintGreetings(userName);
    // console.log(userName);
    // console.log(sampleArg);
}

function paintGreetings(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USER_NAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show user greeting
    paintGreetings(savedUsername);
}