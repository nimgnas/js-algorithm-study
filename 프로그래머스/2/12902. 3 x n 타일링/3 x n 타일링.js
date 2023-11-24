function solution(n) {
    if (n%2 === 1) return 0
    
    const DP = Array(n/2+1).fill(0)
    
    DP[1] = 3
    
    for (let i = 2; i <= n/2; i++){
        let total = 0
        for (let j = 1; j < i; j++){
            if ((i - j) === 1){
                total += DP[i-1]*3
            } else {
                if (j === 1){
                    total += 3 * 2
                } else {
                    total += DP[i-j]*2
                }
            }
        }
        DP[i] = (Number(BigInt(total + 2)))%1000000007
    }
    
    return DP[n/2];
}