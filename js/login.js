let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginbtn = document.querySelector("#signin");

let getusername = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");


loginbtn.addEventListener("click", login)
function login(e) {

    e.preventDefault();

    if (username.value.trim() === getusername.trim() &&
        password.value === getpassword) {

        setTimeout(() => {
            window.location = "index.html";

        }, 1500,);
    }
    else {
        if (username.value === getusername) {
            alert("Incorrect password");
            password.value = "";

        }
        else if (password.value === getpassword) {
            alert("Incorrect username");
            username.value = "";
        }
        else {
            alert("Invalid username and password");
            username.value = "";
            password.value = "";
        }

    }
}


