console.log("Burgershop JS loaded");
// databse
let items = [
    { id: 1, name: "Chicken Burger", price: 1200, category: "burger", img: "assets/Img/chicken-burger.png" },
    { id: 2, name: "Beef Burger", price: 1500, category: "burger", img: "assets/Img/beef-burger.png" },
    { id: 3, name: "Cheese Burger", price: 1000, category: "burger", img: "assets/Img/cheese-burger.png" },
    { id: 4, name: "French Fries", price: 600, category: "side", img: "assets/Img/fries.png" },
    { id: 5, name: "Onion Rings", price: 500, category: "side", img: "assets/Img/onion-rings.png" },
    { id: 6, name: "Coca Cola", price: 300, category: "drink", img: "assets/Img/cola.png" }
];

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

function addToCart(id) {
    console.log("Clicked:", id);
}
