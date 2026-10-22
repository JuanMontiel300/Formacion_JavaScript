const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


const product = products.findIndex(item => item.id === "🥞")

if (product !== -1) {
    myProducts.push(products[product])
    products.splice(product, 1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const update = {
    id: "🍕",
    changes: {
        price: 200,
        description: "Delicioso"
    }
}

const productIndex = productsV2.findIndex(item => item.id === update.id)
productsV2[productIndex] = {
    ...productsV2[productIndex],
    ...update.changes
}

console.log(productsV2)