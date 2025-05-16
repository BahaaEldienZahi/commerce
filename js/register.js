let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let register_btn = document.getElementById("signup");


register_btn.addEventListener("click", function () {
    if (username.value === "" || password.value === "" || email.value === "") {
        alert("Please fill in all fields");

    }
    else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
    }


})