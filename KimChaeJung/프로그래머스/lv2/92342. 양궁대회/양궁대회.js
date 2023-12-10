let maxDiff = -1;
let answer = [-1];

function get_score(apeach, ryan){
    return apeach.reduce((prev, curr, idx) => {
        const score = 10-idx
        if (curr == 0 && ryan[idx] == 0) return prev
        else if (curr >= ryan[idx]) return [prev[0] + score, prev[1]]
        else return [prev[0], prev[1] + score]
    }, [0, 0])
}

function is_better(ryan){
    for (let i = 10; i >= 0; i--){
        if (ryan[i] > answer[i]) return true
        else if (ryan[i] < answer[i]) return false
    }
}

function calculate_score(apeach, ryan){
    const [apeach_score, ryan_score] = get_score(apeach, ryan)
    const diff = ryan_score - apeach_score
    
    if (diff > 0 && diff >= maxDiff){
        if (maxDiff === diff && !is_better(ryan)) return;

        maxDiff = diff;
        answer = ryan.slice(0);
    }
}

function get_ryan_max_limit(apeach){
    const result = []
    apeach.forEach((ele, idx) => {
        for (let i = 0; i <= ele; i++){
            result.push(idx)
        }
    })
    return result
}

function arrow_division(idx, arrows, ryan, apeach){
    if (idx === 11 || arrows === 0) {
        ryan[10] += arrows
        calculate_score(apeach, ryan)
        ryan[10] -= arrows
        return 
    }
    
    if (apeach[idx] < arrows){
        ryan[idx] += apeach[idx] + 1
        arrow_division(idx+1, arrows-apeach[idx]-1, ryan, apeach)
        ryan[idx] -= apeach[idx] + 1
    }
    
    arrow_division(idx+1, arrows, ryan, apeach)
}


function solution(n, info) {
    const ryan = Array(11).fill(0)
    arrow_division(0, n, ryan, info)

    return answer;
}