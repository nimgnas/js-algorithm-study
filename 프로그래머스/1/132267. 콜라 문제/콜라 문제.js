function solution(a, b, n) {
    var answer = 0;
    while (Math.floor(n/a) > 0){
        const emptyCoke = Math.floor(n/a)
        const leftCoke = n%a
        const newCoke = Math.floor(emptyCoke*b)
        answer += newCoke
        n = newCoke + leftCoke
    }
    return answer;
}