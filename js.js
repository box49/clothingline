// JavaScript for adding functionality to the website

// Add event listener to the "Shop Now" button
var shopNowBtn = document.querySelector('.cta');
shopNowBtn.addEventListener('click', function() {
  alert('You clicked the Shop Now button!');
});

// Add event listener to the "View Product" buttons
var viewProductBtns = document.querySelectorAll('.featured-products a');
for (var i = 0; i < viewProductBtns.length; i++) {
  viewProductBtns[i].addEventListener('click', function() {
    alert('You clicked the View Product button!');
  });
}

var cart = [];

var addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
for (var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', function() {
    var product = this.getAttribute('data-product');
    cart.push(product);
    alert('Product added to cart!');
  });
}

function updateCart() {
    var cartItemsEl = document.querySelector('#cart-items');
    cartItemsEl.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
      var li = document.createElement('li');
      li.innerHTML = cart[i];
      cartItemsEl.appendChild(li);
    }
  }

  var checkoutBtn = document.querySelector('#checkout-btn');
checkoutBtn.addEventListener('click', function() {
  // process the order
  // ...
  
  // clear the cart
  cart = [];
  updateCart();
  alert('Order placed! Thank you for shopping with us.');
});

var inventory = {
    product1: 10,
    product2: 5,
    product3: 2
  };
  
  var addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  for (var i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', function() {
      var product = this.getAttribute('data-product');
      if (inventory[product] > 0) {
        cart.push(product);
        inventory[product]--;
        alert('Product added to cart!');
      } else {
        alert('Sorry, this product is out of stock.');
      }
    });
  }
  