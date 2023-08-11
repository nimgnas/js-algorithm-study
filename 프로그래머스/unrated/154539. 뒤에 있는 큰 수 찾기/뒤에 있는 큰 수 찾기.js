function solution(numbers) {
    const answer = Array(numbers.length)
    const LAST_IDX = numbers.length -1
    answer[LAST_IDX] = -1
    const stack = [numbers[LAST_IDX]]
    for (let i = LAST_IDX - 1; i >=0; i--){
        let result = 0
        if (numbers[i] < numbers[i+1]){
            result = numbers[i+1]
        }
        if (numbers[i] == numbers[i+1]){
            result = answer[i+1]
        }
        if (numbers[i] > numbers[i+1]){
            result = -1
            while (stack.length > 0){
                const lastStackEle = stack[stack.length - 1]
                if (lastStackEle <= numbers[i]){
                    stack.pop()
                } else {
                    result = lastStackEle
                    break
                }
            }
        }
        stack.push(numbers[i])
        
        answer[i] = result   
    }
    
    return answer
}