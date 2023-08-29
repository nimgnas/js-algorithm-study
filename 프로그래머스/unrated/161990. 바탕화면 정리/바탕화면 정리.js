function solution(wallpaper) {
    var answer = [50, 50, -1, -1];
    wallpaper.forEach((row, rIdx) => {
        [...row].forEach((cell, cIdx) => {
            if (cell === '#'){
                answer[0] = Math.min(rIdx, answer[0])
                answer[1] = Math.min(cIdx, answer[1])
                answer[2] = Math.max(rIdx+1, answer[2])
                answer[3] = Math.max(cIdx+1, answer[3])
            }
        })
    })
    return answer;
}