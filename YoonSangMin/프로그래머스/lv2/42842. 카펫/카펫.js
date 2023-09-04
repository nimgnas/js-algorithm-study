function solution(brown, yellow) {
    for(let i = 1; i <= yellow; i++) {
        if(yellow % i === 0) {
            const quotient = yellow / i
            if(i >= quotient) {
                const heightSum = quotient * 2
                const widthSum = i * 2
                const brownNum = heightSum + widthSum + 4
                
                if(brownNum === brown) return [i + 2, quotient + 2]
            }
        }
    }
}