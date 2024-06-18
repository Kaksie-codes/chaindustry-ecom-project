import { products } from "../data/products.js";

export default function handleNavigation () {
    // Toggle Language
    const langBtn = document.querySelector('.lang-btn');
    const langList = document.querySelector('.navigation-section-greenbar-eng-items');
    langBtn.addEventListener('click', showLanguage)
    function showLanguage()
    {
        langList.classList.toggle('display-none')
    }

    // Toggle Location
    const locationBtn = document.querySelector('.location-btn');
    const locationList = document.querySelector('.navigation-section-greenbar-diff-locations');
    locationBtn.addEventListener('click', showLocations)
    function showLocations()
    {
        locationList.classList.toggle('display-none')
    }

    // Show mobile categories section
    const hamburgerBtn = document.querySelector('.hambugerMenu-btn');
    const categories = document.querySelector('.navigation-whitebar-categories');
    hamburgerBtn.addEventListener('click', showAllCategories);

    function showAllCategories()
    {
        categories.classList.toggle('hide-mobile')
    }

     // Show categories
     const categoriesBtn = document.querySelector('.categories-btn');
     const categoriesList = document.querySelector('.navigation-section-categories-holder');
     categoriesBtn.addEventListener('click', showCategories);
 
     function showCategories()
     {
         categoriesList.classList.toggle('display-none')
     }

    // display products categories
    function displayProductCategories()
    {
        let categoriesHolder = document.querySelector('.navigation-section-categories-item-holder');
        const categoryCount = {}
       
        products.forEach((product)=>
            {
             
                product.category.forEach((categories)=>{
                    console.log(categories)
                    if(categoryCount[categories])
                        {
                            categoryCount[categories]++
                        }else
                        {
                            categoryCount[categories] = 1
                        }             
                })

            })
            
          
            categoriesHolder.innerHTML = '';
            for(const categoryKeys in categoryCount)
                {
                   console.log(categoryKeys)
                    categoriesHolder.innerHTML += 
                    `
                    <div class="navigation-section-categories-item flex flex-align">
                    <div><img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" alt="image loading"></div>
                    <div class="flex flex-column nav-categories-name-qty">
                      <span>${categoryKeys}</span>
                      <span>${categoryCount[categoryKeys]} items</span>
                    </div>
                  </div>
                    `;


                }



    }
    displayProductCategories()
}