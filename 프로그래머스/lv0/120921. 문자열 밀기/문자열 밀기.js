function solution(A, B) {
    let answer = -1;
    const length = A.length
    for (let i = 0; i > -(length); i--){
        let AIdx = (i + length) % length
        if (A[AIdx] === B[0]){
            let correctCount = length
            for (let j = 0; j < length; j++){
                let compareIdx = (j + AIdx) % length
                if (A[compareIdx] === B[j]){
                    correctCount -= 1
                }
            }
            if (correctCount === 0){
                answer = Math.abs(i)
                break
            }
        }
    }
    return answer;
}