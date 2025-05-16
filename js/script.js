let userinfo = document.querySelector("#user_info");
let userdom = document.querySelector("#user");
let links = document.querySelector("#links");
let logout = document.querySelector("#logout");
logout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500)
})

let username = localStorage.getItem("username");
if (username) {
    links.remove()
    userinfo.style.display = "flex";
    userdom.innerHTML = username;
}