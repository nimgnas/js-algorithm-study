function solution(k, m, score) {
    var answer = 0;
    const sorted_score = score.sort((a, b) => b - a)
    for (let i = 0; i < score.length; i+=m){
        const sliced_by_m = sorted_score.slice(i, i+m)
        if (sliced_by_m.length === m){
            answer += Math.min(...sliced_by_m) * m
        }
    }
    return answer;
}