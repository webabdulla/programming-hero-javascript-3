// how to find find leap year in js 

function leapYer (year){
if((year % 400 === 0)|| ((year % 100 !== 0)&&(year % 4 ===0))){
    console.log('this year is leap year');
}else{
    console.log('this is not a leap year');
}

}

leapYer (2028);