function solution(s) {
    let answer = 0;
    let xInfo = [s[0], 0]
    let notXCount = 0
    
    for (let i = 0; i < s.length; i++){
        if (s[i] === xInfo[0]) {
            xInfo[1] += 1
        } else {
            notXCount += 1
        }
        if (xInfo[1] === notXCount) {
            answer += 1
            if (i === s.length -1) break
            xInfo = [s[i+1], 0]
            notXCount = 0
        } else {
            if (i === s.length -1) {
                answer += 1
            }
        }
    }
    
    return answer;
}