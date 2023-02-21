import products from "./cart.json" assert { type: "json" };

const main = document.querySelector(".container");

for (let i = 0; i < products.length; i++) {
  const product = document.createElement("div");

  product.innerHTML = `
  <div class="box">
    <img src='images/${products[i].image} 
    ' > 
    <div class="name">
    <a href="cart.html">
    ${ products[i].name} 
    </a>
    <div class="shop-btn ">
    <button><a href="#"> Add To Cart ✔️ </a></button>
    <div class="price">
    ${ products[i].price} 
    </div>
    </div>

    `

  main.append(product);
}
// ===========================Cart Menu===================
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};
storeToLocal(product);

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

//Add product in the cart
function addItemToCart(productId) {
  let product = products.find(function (product) {
    return product.id == productId;
  });

  if (cart.length == 0) {
    cart.push(product);
  } else {
    let res = cart.find((element) => element.id == productId);
    if (res === undefined) {
      cart.push(product);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  setCartItems();
}

function setCartItems() {
  if (localStorage.getItem("cart").length > 0) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let added = document.getElementById("addedCart");
    let products = ``;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
      let product = `
          <div class = "cart-item-info">
              <img class= "cart-item-image" src = "./images/${cart[i].image}" alt = "product image">
              <div class="info">
              <h3 class = "cart-item-name">${cart[i].name}</h3>
              <div class = "cart-item-category">For ${cart[i].type}</div>
              <span class = "cart-item-price">Price: ${cart[i].price}$</span>
              </div>
              <div>
              <button data-id="${cart[i].id}" type = "button" class = "cart-item-del-btn">X</button>
              </div>
          </div>`;
      products += product;
    }

    added.innerHTML = products;
    cartTotalValue.innerHTML = total;
    document.querySelectorAll(".cart-item-del-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        removeItemFromCart(e.target.dataset.id);
      });
    });
  }
}

// //Removing product from the cart
function removeItemFromCart(productId) {
  let temp = JSON.parse(localStorage.getItem("cart")).filter(
    (item) => item.id != productId
  );
  localStorage.setItem("cart", JSON.stringify(temp));
  setCartItems();
}