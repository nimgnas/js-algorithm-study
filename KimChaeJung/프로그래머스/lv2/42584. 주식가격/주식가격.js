function solution(prices) {
    var answer = Array(prices.length).fill(0);
    let left = prices.slice(0)
    let right = []
    while (left.length > 0){
        const curr = left.pop()
        let count = 0
        for (let i = right.length-1; i >= 0; i--){
            count += 1
            if (right[i] < curr){
                break
            }
        }
        answer[left.length] = count
        right.push(curr)
    }
    return answer;
}