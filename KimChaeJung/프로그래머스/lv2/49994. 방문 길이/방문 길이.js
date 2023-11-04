function solution(dirs) {
    var answer = 0;
    let visitedInfo = Array.from({length: 11}, () => Array(11).fill(''))
    let start = [5, 5]
    const dirObj = {'U': [-1, 0], 'L': [0, -1], 'R': [0, 1], 'D':[1, 0]}
    dirs.split('').forEach(ele => {
        const [startR, startC] = start
        const [dr, dc] = dirObj[ele]
        const [nextR, nextC] = [startR+dr, startC+dc]
        
        if (nextR < 0 || nextR > 10 || nextC < 0 || nextC > 10){
            return
        }
        
        if (ele === 'U' || ele === 'L'){
            ele = ele === 'U'?'D':'R'
            if (!visitedInfo[nextR][nextC].includes(ele)){
                visitedInfo[nextR][nextC] += ele
            }
        } else {
            if (!visitedInfo[startR][startC].includes(ele)){
                visitedInfo[startR][startC] += ele
            }
        }
        
        start = [nextR, nextC]
        
    })
    
    visitedInfo.forEach(row => {
        row.forEach(dirData => {
            answer += dirData.length
        })
    })

    return answer;
}