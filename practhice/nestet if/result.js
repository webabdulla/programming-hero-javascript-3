
//0-32 f
// 32-40 c 
// 40-60 b 
// 60-70 a- 
// 70-80 a 
// 80-100 a+

// var result = 50;

// if(result > 100){
//     console.log("vai ato number koi paicho");
// }
// else if(result <= 100 && result >= 0){

//     if(result >= 0 && result < 33){
//          console.log('f');
//     }
//     else if(result == 32 && result > 40){
//         console.log('tumi c gread paicho');

//     }
//     else if(result == 40 && result > 60){
//         console.log('tumi b gread paicho');
        
//     }
//     else if(result == 60 && result > 70){
//         console.log('tumi a gread paicho');
        
//     }
//     else if(result == 70 && result > 80){
//         console.log('tumi a+ gread paicho');
        
//     }else{
//         console.log('tumi fell');
//     }

// }
// else{
//     console.log('tumi fell')
// }


var number = 90;

if(number >=0 && number <= 32){
    console.log("f");
}else if(number >=33 && number <=40){
    console.log('c');
}
else if(number >=41 && number <=50){
    console.log('b-');
}
else if(number >=51 && number <=60){
    console.log('b');
}
else if(number >=61 && number <=70){
    console.log('a-');
}
else if(number >=71 && number <=80){
    console.log('a');
}
else if(number >=81 && number <=100){
    console.log('a+');
}else{
    console.log('tumi fal');
}