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
                    // console.log(categories)
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
                //    console.log(categoryKeys)
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






// import { products } from "../data/products.js";
// export default function handleNavigation()
// {
//     const engTextHolder = document.querySelector('.navigation-section-greenbar-eng');
//     const langList = document.querySelector('.navigation-section-greenbar-eng-items');
//     engTextHolder.addEventListener('click', showLanguage)
//     function showLanguage()
//     {
//         langList.classList.toggle('display-none')
//     }
//     const categoriesHolder = document.querySelector('.navigation-section-categories-text');
//     const catList = document.querySelector('.navigation-section-categories-holder');
//     categoriesHolder.addEventListener('click', showCategories);

//     function showCategories()
//     {
//         catList.classList.toggle('display-none')
//     }
//     const locationsHolder = document.querySelector('.navigation-section-greenbar-locations');
//     const diffLocations = document.querySelector('.navigation-section-greenbar-diff-locations');
//     locationsHolder.addEventListener('click', showLanguages);

//     function showLanguages()
//     {
//         diffLocations.classList.toggle('display-none')
//     }
    
//     // display products categories
//     function displayProductCategories()
//     {
//         let categoriesHolder = document.querySelector('.navigation-section-categories-item-holder');
//         const categoryCount = {}
       
//         products.forEach((product)=>
//             {
             
//                 product.category.forEach((categories)=>{
//                     if(categoryCount[categories])
//                         {
//                             categoryCount[categories]++
//                         }else
//                         {
//                             categoryCount[categories] = 1
//                         }             
//                 })

//             })
            
          
//             categoriesHolder.innerHTML = '';
//             for(const categoryKeys in categoryCount)
//                 {
//                    console.log(categoryKeys)
//                     categoriesHolder.innerHTML += 
//                     `
//                     <div class="navigation-section-categories-item flex flex-align">
//                     <div><img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" alt="image loading"></div>
//                     <div class="flex flex-column nav-categories-name-qty">
//                       <span>${categoryKeys}</span>
//                       <span>${categoryCount[categoryKeys]} items</span>
//                     </div>
//                   </div>
//                     `;


//                 }



//     }
//     displayProductCategories()

//     // arrow function syntax
//     const displaySearchItems = ()=>
//     {
//       const searchedValueHolder = document.querySelector('.navigation-section-searchbar');
      
//       // the keyup event listener is triggered when ever any key is been clicked or pressed
//       searchedValueHolder.addEventListener('keyup', (e)=>
//       {
//         const searchedValue = searchedValueHolder.value;
//         console.log(e)
//         // e.key == "Enter" simply means that this function would only be fired if the user clicks on Enter
//         if(e.key == "Enter")
//         {
//           // This array is used to store the products that matched our condition in our IF-Else statement in Line 88
//           let searchedProductArray = []
//           products.forEach(product => 
//             {
//               //  the essense of this code is to check if what the user searched on matches any of the names in our Products. The reason why We used toLowerCase is because JS is case sensitive to we want everything (product.name) and (searchedValue) to be on the same case which is lowe case
//               if(product.name.toLowerCase().includes(searchedValue.toLowerCase()))
//               {
//                 // we need to select the search box holder div so we could remove the display-none class we added to it. This would make it visible. Use ctrl + f to see where this div is on our index.html file; 
//                 document.querySelector('.navigation-section-search-box').classList.remove('display-none');

//                 // After the condition has been met, we would push the product or products that would meet the condition
//                 searchedProductArray.push(product)

//                 // Select the div that will be updated when we search the product 

//                  let searchedProductHTML = document.querySelector('.navigation-section-search-items-holder');
//                  searchedProductHTML.innerHTML = '';

//                 //  Loop through the searchedProducts array 
//                  searchedProductArray.forEach((searchedProduct)=>
//                  {
//                   // dynamically display the searched products here 
//                   searchedProductHTML.innerHTML += `
//                   <div class="navigation-section-search-items-holder flex">
//                   <div class=" flex flex-column flex-justify-center">
//                     <h5>${searchedProduct.name}</h5>
//                     <span>$${searchedProduct.priceCents}</span>
//                   </div>
//                 </div>
//                   `
//                  })

              
//               }
//             })
//         }else
//         {
          
//           return
//         }
//       })
      
      
     

//     }
//     displaySearchItems()
    
//     const displayMobileCategories = ()=>
//     {
//       const categoriesDiv = document.querySelector('.navigation-whitebar-categories');
//       const hambugerMenu =  document.querySelector('.navigation-section-hambugerMenu');
//       hambugerMenu.addEventListener('click', ()=>
//       {
//          categoriesDiv.classList.toggle('flex');
//         console.log(categoriesDiv)
//       })
//     }
//     displayMobileCategories()


 
// }