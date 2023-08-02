var shoppingCart = {
    books:5,
    keyboard:3,
    mouse:1,
    sunglass:2,
    pen:2,
}

var penCount= shoppingCart.pen;

var penCount2= shoppingCart['pen'];

// console.log(penCount);
// console.log(penCount2);

var propertyName='mouse';
var propertyValues= shoppingCart[propertyName];
console.log(propertyName, propertyValues);

var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);
// console.log(properties)
// console.log(propertiesValue);




// set properties Value

shoppingCart.mouse=15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);