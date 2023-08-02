// function maxInArray(numbers){
//      var fastNum = numbers[0];
//     for(var i= 0; i< numbers.length; i++){
//         let index= i;
//         var elements = numbers[index];
//         if(elements > fastNum){
//             fastNum = elements
//         }
//     }
//     return fastNum;
// }

// var height= [20,5,26,58,404,30];
// var tollest = maxInArray(height);
// console.log(tollest);






function bigNum(numbers){
    var fn= numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var index = i;
        var element  = numbers[index];

        if(element > fn){
            fn = element;
        }
        
    }
    return fn;
}


var number =[20,55,5555,888,5,8,1];
var tollest = bigNum(number);
 console.log(tollest);