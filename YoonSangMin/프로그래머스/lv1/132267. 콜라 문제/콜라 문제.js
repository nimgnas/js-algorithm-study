function solution(a, b, n) {
    let quotient = 0
    let remainder = 0
    
    let cnt = 0
    while(n > 0) {
        quotient = Math.floor(n / a)
        remainder = n % a
        
        console.log(remainder)
        
        cnt += quotient
        // n = quotient + remainder
    }
    
    console.log(cnt)
}

// 빈병 갯수에서 a를 나눈 몫고가 나머지을 따로챙김
// 