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