function solution(n) {
    let cnt = 0
    
    while(n > 0) {
        if(n % 2 !== 0) {
            cnt++
            n -= 1
        }
        
        n /= 2
    }
    
    return cnt
}
