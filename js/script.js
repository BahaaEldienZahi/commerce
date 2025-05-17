let userinfo = document.querySelector("#user_info");
let userdom = document.querySelector("#user");
let links = document.querySelector("#links");
let logout = document.querySelector("#logout");

logout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500);
});

let username = localStorage.getItem("username");
if (username) {
    links.remove();
    userinfo.style.display = "flex";
    userdom.innerHTML = username;
};

logout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500);
});

// define products
let productDom = document.querySelector(".products");

let products = [
    {
        id: 1,
        title: "iphone 14",
        price: 100,
        imageUrl: "img/product-1.jpg",
    },
    {
        id: 2,
        title: "iphone 14 pro",
        price: 200,
        imageUrl: "img/product-2.jpg",
    },
    {
        id: 3,
        title: "iphone 14 pro max",
        price: 300,
        imageUrl: "img/product-3.jpg",
    },
    {
        id: 4,
        title: "iphone 14",
        price: 400,
        imageUrl: "img/product-7.jpg"
    },
    {
        id: 5,
        title: "iphone 14 pro",
        price: 500,
        imageUrl: "img/product-8.jpg"
    },
    {
        id: 6,
        title: "iphone 14 pro max",
        price: 600,
        imageUrl: "img/product-9.jpg"
    },
    

];

function drawProductsUI() {
    let productsUI = products.map((item) => {
        return `
        <div class="product-item">
            <img
                src="${item.imageUrl}"
                class="product-item-img"
                alt="product"
            />
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <span>${item.price}</span>
            </div>
            <div class="product-item-action">
                <button class="add-to-cart">add to cart</button>
                <i class="favorit far fa-heart"></i>
            </div>
        </div>
    `;
    });
    productDom.innerHTML = productsUI;
}
drawProductsUI();
