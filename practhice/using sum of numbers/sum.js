
1/*  theke 10 ersum */

// let sum = 0;
// for(let i=1; i <=10 ; i++){
//     sum = sum + i;
// }
// console.log(sum);


/* 10 theke 1projonto asbe */
// var sum = 0;
// for(var i= 10; i >= 1; i--){
//     sum = sum + i ;

// }
// console.log(sum);


//  sum function 

// function sum(i){

//     if(i==1){
//         return 1;
//     }
//     return i + sum(i-1);
// }

// var result = sum(5);
// console.log(result);



// factroial 


function facttroiral(i){

    if(i==1){
        return 1;
    }
    return i * facttroiral(i-1);
}

let result = facttroiral(5);
console.log(result);