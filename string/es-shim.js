function repeat(s,num){
    if(num < 1){return ''}
    if(num % 2){return repeat(s,num - 1) + s}
    var half = repeat(s,num /2);
    return half + half;
}

console.log(repeat('a',9));

