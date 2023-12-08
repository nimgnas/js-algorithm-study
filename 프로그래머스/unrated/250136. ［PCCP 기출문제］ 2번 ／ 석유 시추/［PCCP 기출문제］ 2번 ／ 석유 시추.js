const dr = [0, 0, 1, -1]
const dc = [-1, 1, 0, 0]

function DFS(start, visited){
    let stack = [start]
    visited[start[0]][start[1]] = 2;
    let oilCount = 1
    let memo = Array(visited[0].length).fill(0)
    
    while (stack.length > 0){
        const [currR, currC] = stack.pop()
        for (let i = 0; i < 4 ; i++){
            const [nextR, nextC] = [currR+dr[i], currC+dc[i]]
            if (nextR >= visited.length || nextR < 0 || nextC >= visited[0].length || nextC < 0) continue;
            if (visited[nextR][nextC] == 2) continue;
            if (visited[nextR][nextC] == 0) continue;
            if (nextC !== start[1]){
                memo[nextC] = 1
            }
            visited[nextR][nextC] = 2
            oilCount += 1
            stack.push([nextR, nextC])
        }
    }
    return [oilCount, memo]
}
function solution(land) {
    var answer = 0;
    
    let visited = land.map(landRow => landRow.map(ele => ele));
    let oilCountCol = Array(land[0].length).fill(0)
    
    for (let col = 0; col < land[0].length; col++){
        let oilCount = 0
        for (let row = 0; row < land.length; row++){
            if (visited[row][col] == 1){
                const [count, memo] = DFS([row, col], visited)
                memo.forEach((ele, idx) => {
                    if (ele === 1) {
                        oilCountCol[idx] += count
                    }
                })
                oilCount += count
            }
        }
        oilCountCol[col] += oilCount
    }

    return Math.max(...oilCountCol);
}