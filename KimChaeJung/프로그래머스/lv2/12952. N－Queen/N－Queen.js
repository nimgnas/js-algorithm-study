const isPossible = (colNumList, r, c) => {
    const N = colNumList.length
    const board = Array.from({length: N}, ()=> Array(N).fill(0))

    colNumList.forEach((ele, idx) => {
        if (ele === -1) return false
        board[idx][ele] = 1
        // 세로
        for (let row = 0; row < N; row++){
            board[row][ele] = 1
        }
        // 대각선
        for (let col = 0; col < ele; col++){
            if (idx-(ele-col) >= 0){
                board[idx-(ele-col)][col] = 1
            }
            if (idx+(ele-col) < N){
                board[idx+(ele-col)][col] = 1
            }
        }
        for (let col = ele+1; col < N; col++){
            if (idx-(col-ele) >= 0){
                board[idx-(col-ele)][col] = 1
            }
            if (idx+(col-ele) < N){
                board[ idx+(col-ele)][col] = 1
            }
        }
    })
    if (board[r][c] === 0) return true
    return false
}

function solution(n) {
    var answer = 0;
    var possible = []
    const putQueen = (k, colNumList) => {
        if (k === n){
            possible.push(colNumList.slice(0))
            return
        }
        for (let i = 0; i < n; i++){
            if (!colNumList.includes(i) && isPossible(colNumList, k, i)){
                colNumList[k] = i    
                putQueen(k+1, colNumList)
                colNumList[k] = -1
            }
        }
    }
    putQueen(0, Array(n).fill(-1))
    return possible.length;
    
}