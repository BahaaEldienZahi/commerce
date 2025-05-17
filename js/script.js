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
};

logoutbtn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500)
});

// define products

let products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "img/product1.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "img/product2.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "img/product3.jpg",
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
        image: "img/product4.jpg",
    },
    {
        id: 5,
        name: "Product 5",
        price: 500,
        image: "img/product5.jpg",
    },
];