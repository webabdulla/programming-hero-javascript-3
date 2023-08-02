 var numbers=[20,25,26,85,448,47,55,30,28,40];

//  var tem=[];

//  for( var i=0; i <= numbers.length; i++){
//     var elements = numbers[i];

//     if(elements %2 ==0 ){
//         tem.push(elements);
//     }
//  }
//  console.log(tem);




// var odd= [];

// for(i=0; i<= numbers.length; i++){
//    var element = numbers[i];
//    if(element % 2==1){
//     odd.push(element);
//    }
// }

// console.log(odd);


var result = [];

for (var i= 0; i <= numbers.length; i ++){
    var elements = numbers[i];

    if(elements % 2 ==0){
        result.push(elements);
    }
}
console.log(result);



