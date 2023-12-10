function solution(weights) {
    let answer = 0;
    let obj = {};
    const RATIO = [1/2, 2/3, 3/4, 4/3, 3/2, 2]
    
    weights.forEach(ele => {
        if (obj[ele]){obj[ele] += 1} 
        else {obj[ele] = 1}
    })
    const keys = Object.keys(obj)
    for (let targetIdx = 0; targetIdx < keys.length; targetIdx++){
        const [key, value] = [keys[targetIdx], obj[keys[targetIdx]]]
        if (value > 1) {answer += value * (value-1) / 2}
        for (let compareIdx = targetIdx + 1; compareIdx < keys.length; compareIdx++){
            const [cKey, cValue] = [keys[compareIdx], obj[keys[compareIdx]]]
            for (let i = 0; i < RATIO.length; i++){
                if (key*RATIO[i] == cKey){
                    answer += value * cValue
                    break
                }
            }
        }
    }
    return answer;
}