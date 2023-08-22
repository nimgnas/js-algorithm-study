function solution(k, score) {
    var answer = [];
    const arr = []
    
    for(let i = 0; i < k; i++) {
        if(i >= score.length) break
        
        arr.push(score[i])
        arr.sort((a, b) => b - a)
        answer.push(arr[arr.length - 1])
    }

    
    for(let i = k; i < score.length; i++) {
        if(arr[arr.length - 1] < score[i]) {
            arr.pop()
            arr.push(score[i])
            arr.sort((a, b) => b - a)
        }
            answer.push(arr[arr.length - 1])
    }
    
    return answer;
}