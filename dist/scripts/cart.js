import { products } from '../data/products.js'

export let Cart = JSON.parse(localStorage.getItem('carts')) || [];
let UpdatedProduct = JSON.parse(localStorage.getItem('updatedProducts')) || [];

export const handleCart = () => {
    displayProductInCart();

    // Adding Items to cart
    const addToCartBtns = document.querySelectorAll('.best-deals-item-btn');
    Array.from(addToCartBtns).forEach((btn) => {
        btn.addEventListener('click', addToCart);
    });

    // Function for adding items to cart
    function addToCart(e) {
        const productID = e.target.getAttribute('id');
        const isProductInCart = Cart.some(cartItem => cartItem.id === productID);

        if (isProductInCart) {
            const productInCart = Cart.find(cartItem => cartItem.id === productID);
            productInCart.quantity++;
        } else {
            const productToAdd = products.find(product => product.id === productID);
            productToAdd.quantity = 1;
            Cart.push(productToAdd);
        }
        localStorage.setItem('carts', JSON.stringify(Cart));
        displayProductInCart();
    }

    // Function for deleting items from the cart
    function removeProductFromCart(e) {
        const productID = e.target.getAttribute('data-index');
        Cart = Cart.filter(item => item.id !== productID);
        UpdatedProduct = UpdatedProduct.filter(item => item.id !== productID);
        localStorage.setItem('carts', JSON.stringify(Cart));
        localStorage.setItem('updatedProducts', JSON.stringify(UpdatedProduct));
        displayProductInCart();
    }

    function displayProductInCart() {
        let cartItemsContainer = document.querySelector('.cart-items-in-cart');
        if (Cart.length === 0) {
            cartItemsContainer.innerHTML = 'No product in cart';
        } else {
            cartItemsContainer.innerHTML = '';
            Cart.forEach((cartItem) => {
                cartItemsContainer.innerHTML += `
                <div class="cart-item-in-cart">
                    <div class="cart-item-content">
                        <div class="cart-item-left">
                            <div class="cart-item-in-cart-img">                                
                                <img src="${cartItem.image}" alt="">
                            </div>
                            <p class="cart-item-in-cart-name">${cartItem.name}</p>
                        </div>
                        <div class="cart-item-right">
                            <div class="cart-item-in-cart-qty">
                                <button class="cart-inc-btn" id="${cartItem.id}">+</button>
                                <span>${cartItem.quantity}</span>
                                <button class="cart-dec-btn" id="${cartItem.id}">-</button>
                            </div>
                            <span class="cart-items-in-cart-price">$${cartItem.priceCents}</span>
                        </div>
                    </div>
                    <i class="fa fa-times delete-product" aria-hidden="true" data-index="${cartItem.id}"></i>
                </div>
                `;
            });
            // Attach delete event listeners after rendering cart items
            attachDeleteEventListeners();
        }
    }

    function attachDeleteEventListeners() {
        const deleteIcons = document.querySelectorAll('.delete-product');
        deleteIcons.forEach(deleteIcon => {
            deleteIcon.addEventListener('click', removeProductFromCart);
        });
    }

    // Initial call to attach delete event listeners
    attachDeleteEventListeners();
}




// import { products } from "../data/products.js";

// export let Cart = JSON.parse(localStorage.getItem('carts')) || [];
// let UpdatedProduct = JSON.parse(localStorage.getItem('updatedProducts')) || [];
// let initialProduct;
// export function handleCart() {
//   function addToCart() {
//     const addToCartBtn = document.querySelectorAll('.best-deals-item-btn');

//     Array.from(addToCartBtn).forEach(btn => {
//       btn.addEventListener('click', (e) => {
//         const productID = e.target.getAttribute('id');
//         const isProductInCart = Cart.some(cartItems => cartItems.id === productID);

//         if (isProductInCart) {
//           const productInCart = Cart.find(cartItem => cartItem.id === productID);
//           productInCart.quantity++;
//           localStorage.setItem('carts', JSON.stringify(Cart));
//           displayProductInCart();
//         } else {
//           const productToAdd = products.find(product => product.id === productID);
//           productToAdd.quantity = 1;
//           Cart.push(productToAdd);
//           localStorage.setItem('carts', JSON.stringify(Cart));
//           displayProductInCart();
//         }
//       });
//     });
//   }
//   addToCart();

//   function displayProductInCart() {
//     let cartItemsContainer = document.querySelector('.cart-items-in-cart');
//     if (Cart.length === 0) {
//       cartItemsContainer.innerHTML = 'No product in cart';
//     } else {
//       cartItemsContainer.innerHTML = '';
//       Cart.forEach((cartItem) => {
//         cartItemsContainer.innerHTML += `
//         <div class="cart-item-in-cart">
//           <div class="cart-items-in-cart-img">
//             <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png" alt="">
//           </div>
//           <div class="cart-items-in-cart-name">${cartItem.name}</div>
//           <div class="cart-items-in-cart-qty">
//             <button class="cart-inc-btn" id="${cartItem.id}">+</button>
//             <span>${cartItem.quantity}</span>
//             <button class="cart-dec-btn" id="${cartItem.id}">-</button>
//           </div>
//           <div class="cart-items-in-cart-price">$${cartItem.priceCents}</div>
//           <i class="fa fa-times close-icon-cart" aria-hidden="true" data-index="${cartItem.id}"></i>
//         </div>
//         `;
//       });

//       const incBtn = document.querySelectorAll('.cart-inc-btn');
//       const decBtn = document.querySelectorAll('.cart-dec-btn');

//       // this is for the incrementing button
//       Array.from(incBtn).forEach(btn => {
//         btn.addEventListener('click', (e) => {
//           const productID = e.target.getAttribute('id');
//           const productInCart = Cart.find(product => product.id === productID);
//           let productInStock = UpdatedProduct.find(product => product.id === productID);
//            initialProduct = products.find(product =>
//             {
//               return product.id === productID
//             })
//            const initialProductQty = initialProduct.qty;
//           if (!productInStock) {
//             productInStock = products.find(product => product.id === productID);
//             UpdatedProduct.push(productInStock);
//           }
//           if (productInStock.qty > 1) {
//             productInCart.quantity++;
//             productInStock.qty--;
//             localStorage.setItem('carts', JSON.stringify(Cart));
//             localStorage.setItem('updatedProducts', JSON.stringify(UpdatedProduct));
//             displayProductInCart();
//           } else {
//             alert('We are out of stock');
//           }
//         });
//       });

//       // this is for the decrementing button
//       Array.from(decBtn).forEach(btn => {
//         btn.addEventListener('click', (e) => {
//           const productID = e.target.getAttribute('id');
//           const productInCart = Cart.find(product => product.id === productID);
          
//           let productInStock = UpdatedProduct.find(product => product.id === productID);

//           if (!productInStock) {
//             productInStock = products.find(product => product.id === productID);
//             UpdatedProduct.push(productInStock);
//           }

//           if (productInCart.quantity > 1) {
//             productInCart.quantity--;
//             productInStock.qty++;
//             localStorage.setItem('carts', JSON.stringify(Cart));
//             localStorage.setItem('updatedProducts', JSON.stringify(UpdatedProduct));
//             displayProductInCart();
//           } else {
//             alert('Quantity cannot be less than 1');
//           }
//         });
//       });
//     }

//     function removeProductFromCart()
//     {
//       const deleteIcons = document.querySelectorAll('.close-icon-cart');
//       Array.from(deleteIcons).forEach(deleteIcon =>
//         {
//           deleteIcon.addEventListener('click',(e)=>
//           {
//             const productID = e.target.getAttribute('data-index');

           
//               const newArray = Cart.filter( item =>
//                 {
//                   return item.id !== productID
//                 })
//                 const newArray2 = UpdatedProduct.filter( item =>
//                   {
//                     return item.id !== productID
//                   })
//                 Cart = newArray
//                 UpdatedProduct = newArray2
//                 localStorage.setItem('carts', JSON.stringify(Cart));
//                 localStorage.setItem('updatedProducts', JSON.stringify(UpdatedProduct));
//                 displayProductInCart();

//           })
//         })
//     }
//     removeProductFromCart()
//   }
//   displayProductInCart();

  
//   // 
// }

