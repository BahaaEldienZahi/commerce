let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let registerbtn = document.getElementById("signup");


registerbtn.addEventListener("click", register);
function register(e) {

    e.preventDefault();
    if (username.value === "" || password.value === "" || email.value === "") {
        alert("Please fill in all fields");

    }
    else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        setTimeout(() => {
            window.location = "login.html";
        }, 1500);
    }


}
