function bringSingara(money){
    var singaraPrice= 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('eating singaras', singaras);