function repeatStr (n, s) {
    let str = s;
    if(n > 0){
       for(let i = 1; i < n; i++){
           str += s
       }
          return str;
    }
    return '';
}