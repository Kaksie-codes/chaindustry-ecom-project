import { products } from "../data/products.js";

export function handleBestDeals()
{
  let bestDealsItemsHolder = document.querySelector('.best-deals-section-items');

  bestDealsItemsHolder.innerHTML = '';
  
  products.forEach((product)=> 
  {
    bestDealsItemsHolder.innerHTML += 
    `
      <div class="best-deals-section-item">
        <div class="best-deals-section-item1 flex flex-center">
          <img src="${product.image}" alt="image-loading">
          <div class="icon">
            <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
        </div>
        <div class="best-deals-section-item2">
          <div class="flex flex-justify-between best-deals-section-item2-texts">
            <h4>${product.name}</h4>
            <span>$${product.priceCents}</span>
          </div>
          <p>${product.desc} </p>
          <div class="ratings flex">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <button class="best-deals-item-btn" id="${product.id}">Add to Cart</button>
        </div>
    </div>
    `
  })
}