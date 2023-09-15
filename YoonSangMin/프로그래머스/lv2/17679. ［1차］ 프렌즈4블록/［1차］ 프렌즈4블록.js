function solution(m, n, board) {
    let prevCnt = 0

    while(true) {
        let cnt = 0
        const copyBoard = searchBomb(m, n, board)
        board = relocateBoard(m, n, copyBoard)
        
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(board[i][j] === "0") cnt++
            }
        }
        
        if(prevCnt === cnt) return cnt
        prevCnt = cnt
    }
}

function searchBomb(m, n, board) {
    const copyBoard = board.map((v) => v.split(""))
    for(let i = 0; i < m - 1; i++) {
        for(let j = 0; j < n - 1; j++) {
            const target = board[i][j]
            if(board[i][j + 1] === target && board[i + 1][j] === target && board[i + 1][j + 1] === target) {
                copyBoard[i][j] = "0"
                copyBoard[i][j + 1] = "0"
                copyBoard[i + 1][j] = "0"
                copyBoard[i + 1][j + 1] = "0"
            }
        }
    }
    
    return copyBoard
}

function relocateBoard(m, n, copyBoard) {
    const roateBoard = []
    for(let i = 0; i < n; i++) {
        const row = []
        for(let j = m - 1; j >= 0; j--) {
            if(copyBoard[j][i] !== "0") row.push(copyBoard[j][i])
        }
        while(row.length < m) row.push("0")
        roateBoard.push(row)
    }    
    
    const newBoard = []
    for(let i = m - 1; i >= 0; i--) {
        const row = []
        for(let j = 0; j < n; j++) {
            row.push(roateBoard[j][i])
        }
        newBoard.push(row)
    }

    return newBoard.map((v) => v.join(""))
}
