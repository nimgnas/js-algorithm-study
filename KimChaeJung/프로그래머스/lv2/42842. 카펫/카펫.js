function getFactor(n) {
    let factorArr = []
    for (let i = n; i >= n**(1/2); i--){
        if (n%i === 0) factorArr.push([i, ~~n/i])
    }
    return factorArr
}
function solution(brown, yellow) {
    var answer = [];
    const possibleArr = getFactor(brown+yellow)
    getFactor(brown+yellow).forEach(([width, height]) => {
        if ((width-2)*(height-2) === yellow){
            answer = [width, height]
            return false
        }
    })
    return answer;
}