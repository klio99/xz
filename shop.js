import products from "./furniture.json" assert { type: "json" };

const main = document.querySelector(".container");

for (let i = 0; i < products.length; i++) {
  const product = document.createElement("div");

  product.innerHTML = `
  <div class="box">
    <img src='image/${products[i].image} 
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


const shoppingBtn = document.getElementById('cart-box');
const cartItme = document.getElementById('cart-icon');
const crossBtn = document.getElementById('cross-btn');

shoppingBtn.addEventListener('click', ()=>{
    const showCart = cartItme.getAttribute('data-visible');
   
    if(showCart === 'false'){
        cartItme.setAttribute('data-visible', true)
    }else{
        cartItme.setAttribute('data-visible', false)
    }
})

crossBtn.addEventListener('click', ()=>{
    const showCart = cartItme.getAttribute('data-visible');
   
    if(showCart === 'true'){
        cartItme.setAttribute('data-visible', false)
    }
})

const sideNav = document.getElementById('side-nav');
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', ()=>{
  const categoryShow = sideNav.getAttribute('data-category')

  if(categoryShow === 'false'){
      sideNav.setAttribute('data-category', true)
      arrow.setAttribute('data-category', true)
  }else{
      sideNav.setAttribute('data-category', false)
      arrow.setAttribute('data-category', false)
  }
})
