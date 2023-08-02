function   findvowels(vowels){
    const alphabet=[];

    for(i=0; i< vowels.length; i++){

        var elements = vowels[i];
    if( elements ==='a ' || elements ==='e' || elements ==='i' || elements ==='o' || elements ==='u'){
        alphabet.push(`${elements} is vowel`);
    }
    else{
        alphabet.push(`${elements} is vowel`);
    }
}
    return alphabet;
}
var result=findvowels('hello');
console.log(result);
