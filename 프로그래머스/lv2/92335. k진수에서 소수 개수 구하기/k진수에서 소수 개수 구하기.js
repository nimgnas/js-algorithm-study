function isPrime(n) {
    const numN = +n
    if (numN === 1) return false
    if (numN === 2) return true
    for (let i = 2 ; i <= Math.ceil(numN**(1/2)); i++){
        if (numN%i === 0) return false
    }
    return true
}
function solution(n, k) {
    return n.toString(k).split('0').filter(ele => ele.length > 0 && isPrime(ele)).length;
}