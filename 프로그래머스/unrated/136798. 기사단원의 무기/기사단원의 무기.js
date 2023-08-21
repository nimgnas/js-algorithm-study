function countFactor(number){
    let count = 0
    for (let i = 1; i <= number**(1/2); i++){
        if (i**2 === number) {
            count += 1;
            break;
        }
        if (number % i === 0) count += 2
    }
    return count
}
function solution(number, limit, power) {
    return Array
        .from({length: number}, (_, idx) => idx+1)
        .map(ele => {
            const factor = countFactor(ele);
            return factor > limit ? power : factor
        })
        .reduce((a, b) => a + b, 0);
}