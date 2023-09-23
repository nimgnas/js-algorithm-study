function solution(N, stages) {
    const getChallenger = (stage) => stages.filter((v) => v >= stage)
    const getFailLength = (challengerArr, stage) => challengerArr.filter((v) => v === stage).length
    const arr = []
    
    for(let i = 1; i <= N; i++) {
        const challengerArr = getChallenger(i)
        const failPeople = getFailLength(challengerArr, i)
        const failRate = failPeople / challengerArr.length
        
        arr.push([i, failRate])
    }
    
    return arr.sort((a, b) => b[1] - a[1]).map((v) => v[0])
}