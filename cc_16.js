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
