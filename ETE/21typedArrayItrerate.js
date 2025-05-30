// Function to log product details
function logProducts(products) {
    products.forEach(function (product) {
        console.log("Name: ".concat(product.name, ", Price: $").concat(product.price));
    });
}
// Sample array of products
var productsList = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 45 }
];
// Call the function
logProducts(productsList);
