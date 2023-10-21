function solution(storey) {
    var answer = 0;
    
    const stair = (""+storey).split('').map(ele => +ele)
    
    while (stair.length > 0){
        const ele = stair.pop()
        if (ele >= 6){
            if (stair.length === 0){
                stair.push(1)
            } else {
                stair.push(stair.pop() + 1)
            }
            answer += (10 - ele)
        } else if (ele <= 4){
            answer += ele
        } else {
            if (stair[stair.length - 1]>=5){
                stair.push(stair.pop() + 1)
            }
            answer += ele
        }
    }


    return answer;
}