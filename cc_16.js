//Task 2: Fetch Products with .then()

const productContainer = document.getElementById('product-container');

function fetchProductsThen(){ 
    fetch('https://www.course-api.com/javascript-store-products') //pull information from the link
        .then((response) => { 
            return response.json();
        })  //return the information in a format that works with javascript coding
        .then((productsData) =>{
            productsData.forEach((product) => { //for each product 
                console.log(product.fields.name)  //print the product name to the console
        });
    })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);  //if there is an error fetching the product, an error will display
    });
}
fetchProductsThen()  //calls the function to print the products names to the console


//Task 3: Fetch Products with async/await
async function fetchProductsAsync(){ 
    try{ 
    const response = await fetch('https://www.course-api.com/javascript-store-products'); //wait to fetch the data until the link is responsive
    
    if (!response.ok){ 
        throw new Error('Data Not Pulling from Link');}  //if the link is not responive, an error message will be assigned
    
    const products = await response.json();  //wait for the respone to then format the data for the products
    displayProducts(products); //after the previous steps, you may apply the display products function

    }
    catch (error){
        handleError(error)} //if there is a error, the handle error function will log the message
}


//Task 4: Display the Products 
function displayProducts(products){
    const productContainer = document.querySelector('#product-container');  //call the product container

    products.slice(0,5).forEach(product => {  //for only the first 5 products 

        const productItem = document.createElement('div');  //create product item that is attached to the html file
        productItem.classList.add('product');  //add a product class to the product

        const productName = document.createElement('h2');  //assign the name for the product element to the html
        productName.textContent = `Product Name: ${product.fields.name}`;

        const productPrice = document.createElement('p');  //assign the price for the product element to the html
        productPrice.textContent = `Product Price: $${product.fields.price}`;

        const productImage = document.createElement('img'); //assign the image to the html 
        productImage.src = product.fields.image[0].url; //pull the image contents from the link and apply them to the image
        productImage.alt = product.fields.name; //if the image does not print, apply the name instead

        //Append the details to the product 
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productImage);

        //Append the product to the product container
        productContainer.appendChild(productItem);
        })
    }


//Task 5: Resuable Error Handler
function handleError(error){  //when the handle error function is called in task 3
    console.error("An Error Occured:", error)  //Alert that an error occured and pull the specific error 
}
