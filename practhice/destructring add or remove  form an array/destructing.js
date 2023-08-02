const product =[
    {name : 'laptop', price:80000, brand: 'hp', color: 'silver'},
    {name : 'phone', price:15000, brand: 'iphone', color: 'golden'},
    {name : 'Watch', price:5000, brand: 'sunstar', color: 'black'},
    {name : 'mouse', price:2000, brand: 'hp', color: 'black'},
];

// add product an array
const addProduct = {name:'sunglass',price : 1000, brand : 'ray', color:'black'};
const newProduct = [...product,addProduct];

console.log(product);
console.log(newProduct);



// remove product 

const removeProduct = product.filter(p => p.name !== 'phone');

console.log(removeProduct);