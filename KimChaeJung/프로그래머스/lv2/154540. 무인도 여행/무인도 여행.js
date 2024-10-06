function dfs(maps, start, visited){
    const stack = [start]
    const route = []
    
    const dy = [0, 0, 1, -1]
    const dx = [1, -1, 0, 0]
    
    while (stack.length > 0){
        const [y, x] = stack.pop()
        
        if (visited[y][x]) continue
        
        visited[y][x] = true
        route.push(+maps[y][x])
        
        for (let n = 0; n < 4; n++){
            const nextY = y + dy[n]
            const nextX = x + dx[n]
            
            if (nextY >= maps.length || nextY < 0 || nextX >= maps[0].length || nextX < 0) continue
            if (maps[nextY][nextX] === 'X') continue
            
            if (!visited[nextY][nextX]){
                stack.push([nextY, nextX])
            }
        }
    }
    
    return route
}

function sumArr(arr){
    return arr.reduce((prev, ele) => prev + ele, 0)
}

function solution(maps) {
    const answer = [];
    const visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false))
    
    for (let y = 0; y <maps.length ; y++){
        for (let x = 0; x < maps[0].length ; x++ ){
            if (visited[y][x]) continue
            if (maps[y][x] === 'X'){
            visited[y][x] = true
                continue
            }
            const route = dfs(maps, [y, x], visited)
            answer.push(sumArr(route))
        }
    }
    
    answer.sort((a, b) => a - b)
    
    return answer.length > 0 ? answer : [-1];
}