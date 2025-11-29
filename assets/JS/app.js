// databse
let items = [
    { id: 1, name: "Chicken Burger", price: 1200, category: "burger", img: "assets/Img/chicken-burger.png" },
    { id: 2, name: "Beef Burger", price: 1500, category: "burger", img: "assets/Img/beef-burger.png" },
    { id: 3, name: "Cheese Burger", price: 1000, category: "burger", img: "assets/Img/cheese-burger.png" },
    { id: 4, name: "French Fries", price: 600, category: "side", img: "assets/Img/fries.png" },
    { id: 5, name: "Onion Rings", price: 500, category: "side", img: "assets/Img/onion-rings.png" },
    { id: 6, name: "Coca Cola", price: 300, category: "drink", img: "assets/Img/cola.png" }
];

let cart = [];

// loading the menu
function loadMenu() {
    let container = document.getElementById("menu-container");
    container.innerHTML = "";
    items.forEach((item) => {
        container.innerHTML += `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card product-card h-100" onclick="addToCart(${item.id})">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body text-center">
                        <h6 class="card-title fw-bold">${item.name}</h6>
                        <p class="card-text text-danger fw-bold">${item.price} LKR</p>
                        <button class="btn btn-add btn-sm w-100">Add to Order</button>
                    </div>
                </div>
            </div>
        `;
    });
}
loadMenu();

// shopping vart
function addToCart(id) {
    let product = items.find(item => item.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    let cartBody = document.getElementById("cart-items");
    let totalDisplay = document.getElementById("total-price");
    cartBody.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">&times;</button></td>
            </tr>
        `;
    });
    totalDisplay.innerText = total + " LKR";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function placeOrder() {
    let name = document.getElementById("customer-name").value;
    if (cart.length === 0) { alert("Your cart is empty!"); return; }
    if (name === "") { alert("Please enter a customer name."); return; }
    alert("Order Placed Successfully!\nCustomer: " + name + "\nTotal: " + document.getElementById("total-price").innerText);
    cart = [];
    document.getElementById("customer-name").value = "";
    updateCart();
}
