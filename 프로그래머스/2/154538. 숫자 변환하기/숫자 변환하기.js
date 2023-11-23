
function solution(x, y, n) {
    var answer = 0;
    
    if (x === y) return answer
    
    const DP = Array.from({length: y+1}, (ele, idx) => {
        if (idx < x) return -1
        return 0
    })
    
    for (let i = x+1; i <= y; i++){
        const possible = []
        if (i%3===0 && DP[i/3] != -1){
            possible.push(DP[i/3]+1)
        }
        if (i%2===0 && DP[i/2] != -1){
            possible.push(DP[i/2]+1)
        }
        if (i-n > 0 && DP[i-n] != -1){
            possible.push(DP[i-n]+1)
        }
        if (possible.length > 0){
            DP[i] = Math.min(...possible)
        } else {
            DP[i] = -1
        }
    }
    
    return DP[y] === 0 ? -1 : DP[y]
}