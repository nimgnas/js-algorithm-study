function isPrimeNumber(number){
    if (number < 2) return false
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number%i == 0) return false
    }
    return true
}

function* permutations(arr, n) {
    if (n == 1) {
        for (let ele of arr) yield [ele]
    } else {
        for (let i = 0; i < arr.length; i++){
            let rest = [...arr.slice(0, i), ...arr.slice(i+1)]
            for (let permu of permutations(rest, n-1)){
                yield [arr[i], ...permu]
            }
        }
    }
}

function solution(numbers) {
    const answerSet = new Set([])
    const digitList = numbers.split('')
    
    for (let digitCount = 1; digitCount <= digitList.length; digitCount++){
        for (const permu of permutations(digitList, digitCount)){
            const targetNumber = +permu.join("")
            
            if (isPrimeNumber(targetNumber)){
                answerSet.add(targetNumber)
            }
        }
    }
    
    
    
    return answerSet.size;
}