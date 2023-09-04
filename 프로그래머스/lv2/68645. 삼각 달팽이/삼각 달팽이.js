function solution(n) {
    var answer = [];
    if (n === 1) return [1]
    const total = (1 + n)*n/2
    let curr = 1
    let [r, c] = [0, 0]
    let dir = 0 // 0: down, 1: right, 2: up
    const snailArr = Array.from({length: n}, (_, idx) => Array(idx+1).fill(0))
    while (curr <= total){
        snailArr[r][c] = curr
        if (dir === 0){
            r += 1
            if (r >= (n-c)){
                dir += 1
                r -= 1
                c += 1
            } 
        } else if (dir === 1){
            c += 1
            if (c > r+1 | snailArr[r][c] != 0){
                dir = 2
                r -= 1
                c -= 2
            }
        } else {
            r -= 1
            c -= 1
            if (snailArr[r][c] != 0){
                dir = 0
                r += 2
                c += 1
            }
        }
        curr += 1
    }
    return snailArr.reduce((a, b) => a.concat(...b), []);
}