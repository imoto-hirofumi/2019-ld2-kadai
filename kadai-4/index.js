const product = (a, b)=>{
    return a * b;
}

const result = product(100, 28);
console.log(result);

const  sum = (n)=>{
    let result1 = 0;
    for (i = 1; i <= n; i++){
        result1 = result1 + i;
    }
    return result1;
}

const result2 = sum(500);
console.log(result2);

