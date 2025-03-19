function filterProductByStock(products) {
    return products.filter(product => product.stock > 0);
}

const products = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 5 },
    { name: "Camera", stock: 0 }
];

console.log(filterProductByStock(products))