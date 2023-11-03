function solution(players, callings) {
    let answer = players.slice(0)
    let obj = {}
    
    players.forEach((ele, idx) => obj[ele] = idx )
    
    callings.forEach(ele => {
        const passNum = obj[ele]
        
        obj[ele] -= 1;
        obj[answer[passNum-1]] += 1;

        [answer[passNum-1], answer[passNum]] = [answer[passNum], answer[passNum-1]]
    })
    

    return answer;
}