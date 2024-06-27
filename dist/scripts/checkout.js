import { Cart } from "./cart.js";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDS2pM7Hf5gEE5_HkT9E1086dxdTeygmWc",
    authDomain: "e-commerce-dashboard-pro-4e845.firebaseapp.com",
    projectId: "e-commerce-dashboard-pro-4e845",
    storageBucket: "e-commerce-dashboard-pro-4e845.appspot.com",
    messagingSenderId: "1010329527824",
    appId: "1:1010329527824:web:8def87c01823705232cc95"
};

// initializing firebase (linking firebase backend to frontend)
const app = initializeApp(firebaseConfig);

// connecting our firestore database
const db = getFirestore(app);

// Get a Reference to our Collection
const colRef = collection(db, 'Orders')

function handleCheckout()
{

if(Cart.length > 0)
{
console.log(Cart)
let checkoutItemsHolder = document.querySelector('.checkout-green-section-cart-items2');
checkoutItemsHolder.innerHTML = ''
Cart.forEach(cartItem =>
{
checkoutItemsHolder.innerHTML += `<div class="flex flex-justify-between flex-align">
<img src="${cartItem.image}" alt="">
<span>${cartItem.name}</span>
<span>${cartItem.quantity}</span>
<span>$${cartItem.priceCents}</span>
</div>`
})
}else
{
console.log('nothing dey your cart')
}

const priceArray = [];
const quantityArray = [];

let priceTotal = 0;
let quantityTotal = 0;
let checkoutTotal = 0;
let checkoutTotalSpan = document.querySelector('.checkout-total')

function calculateTotal()
{
Cart.forEach(cartItem =>
{
priceArray.push(cartItem.priceCents);
quantityArray.push(cartItem.quantity)
})

priceArray.forEach(price =>
{
priceTotal+= price;
})
quantityArray.forEach(qty =>
{

quantityTotal+= qty;
})

checkoutTotal = priceTotal * quantityTotal;
checkoutTotalSpan.innerHTML ='$' + checkoutTotal.toLocaleString()
}
calculateTotal()
console.log(checkoutTotal)


let checkoutForm = document.querySelector('.checkout-form');
checkoutForm.addEventListener('submit', async (e) =>
{
    e.preventDefault();
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let address = document.querySelector('#address').value
    let bus = document.querySelector('#bus').value
    let postal = document.querySelector('#postal').value
    let phone = document.querySelector('#phone').value

    const data = {name, email, address, bus, postal, phone, Cart, timestamp: new Date()}

    try {
        addDoc(colRef, data);
        alert(`hello ${name} your order has been successfully recieved`)
    } catch (error) {
        console.error('order was not successful', error)
    }
})
}
handleCheckout()