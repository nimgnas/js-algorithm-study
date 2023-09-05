function solution(n) {
    const move = [[1, 0], [0, 1], [-1, -1]]    
    const arr = Array.from({length : n}, () => [])
    let arrCheck = [-1, 0]
    
    let num = 1
    for(let i = n; i > 0; i--) {
        const currentMove = Math.abs(i - n) % 3

        for(let j = 0; j < i; j++) {
            arrCheck = [arrCheck[0] + move[currentMove][0], arrCheck[1] + move[currentMove][1]]
            arr[arrCheck[0]][arrCheck[1]] = num++
        }
    }
    return arr.join().split(",").map((v) => Number(v))
}