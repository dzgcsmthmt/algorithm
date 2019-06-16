function reverse(str){
    var arr = str.split(' ');
    arr = arr.map(item => {
        return [...item].reverse().join('');
    })
    return arr.join(' ');
}

export default reverse;
