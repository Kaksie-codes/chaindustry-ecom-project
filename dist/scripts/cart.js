import { products } from '../data/products.js'

export let Cart = JSON.parse(localStorage.getItem('carts')) || [];
let UpdatedProduct = JSON.parse(localStorage.getItem('updatedProducts')) || [];
let initialProduct;

export const handleCart = () => {

    // Function for adding items to cart
    function addToCart (){
        // get all the add to cart buttons
        const addToCartBtns = document.querySelectorAll('.best-deals-item-btn');
        console.log(addToCartBtns)

        // Convert the nodelist into an array, and then map through while adding event listeners
        Array.from(addToCartBtns).forEach((btn, index) => {
            // console.log(`btn ${index}`)
            btn.addEventListener('click', (e) => {
              const productID = e.target.getAttribute('id');
              console.log(productID)
              const isProductInCart = Cart.some(cartItems => cartItems.id === productID);
      
              if (isProductInCart) {
                const productInCart = Cart.find(cartItem => cartItem.id === productID);
                productInCart.quantity++;
                localStorage.setItem('carts', JSON.stringify(Cart));
                displayProductInCart();
              } else {
                const productToAdd = products.find(product => product.id === productID);
                productToAdd.quantity = 1;
                Cart.push(productToAdd);
                localStorage.setItem('carts', JSON.stringify(Cart));
                displayProductInCart();
              }
            });
          });
    }

    addToCart();

    function displayProductInCart(){
        let cartItemsContainer = document.querySelector('.cart-items-in-cart');
        if (Cart.length === 0) {
            cartItemsContainer.innerHTML = 'No product in cart';
        } else {
            cartItemsContainer.innerHTML = '';
            Cart.forEach((cartItem) => {
                cartItemsContainer.innerHTML += `
                <div class="cart-items-in-cart">
                    <div class="cart-item-in-cart">
                        <div class="cart-item-content">
                        <div class="cart-item-left">
                            <div class="cart-item-in-cart-img">                                
                                <img src="${cartItem.image}" alt="">
                            </div>
                            <p class="cart-item-in-cart-name">
                            ${cartItem.name}
                            </p>
                        </div>
                        <div class="cart-item-right">
                            <div class="cart-item-in-cart-qty">
                            <button class="cart-inc-btn" id="15b6fc6f-327a-4ec4-896f-486349e85a3d">+</button>
                            <span>${cartItem.quantity}</span>
                            <button class="cart-dec-btn" id="15b6fc6f-327a-4ec4-896f-486349e85a3d">-</button>
                            </div>
                            <span class="cart-items-in-cart-price">$${cartItem.priceCents}</span>
                        </div>
                        </div>
                        <i class="fa fa-times close-icon-cart" aria-hidden="true" data-index="15b6fc6f-327a-4ec4-896f-486349e85a3d"></i>
                    </div>
                </div>
                `;
            });
            
        }
    }
}