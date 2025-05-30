// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
};

// Function to log product details
function logProducts(products: Product[]): void {
  products.forEach(product => {
    console.log(`Name: ${product.name}, Price: $${product.price}`);
  });
}

// Sample array of products
const productsList: Product[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 45 }
];

// Call the function
logProducts(productsList);
