
function findBlock(board) {
    const dir = [[0, 0], [0, 1], [1, 0], [1, 1]]
    const eraseSpot = []
    
    for (let i = 0; i < board.length-1; i++){
        for (let j = 0; j < board[0].length-1; j++) {
            const block = board[i][j];
            if (block === '_') continue
            let sameCount = 0;
            dir.slice(1).forEach(([r, c]) => {
                if (board[i+r][j+c] === block) sameCount += 1
            })
            if (sameCount === 3){
                dir.forEach(([r, c]) => {
                    eraseSpot.push([i+r, j+c])
                })
            }
        }
    }
    return eraseSpot
}

function eraseBlock(board, erase, m) {
    erase.forEach(([r, c]) => {
        board[r][c] = '_'
    })
    board = board.map(ele => {
        let newEle = ele.join('').replaceAll('_', '').split('')
        while (newEle.length < m){
            newEle.push('_')
        }
        return newEle
    })
    return board
}

function countErase(board) {
    let count = 0;
    board.forEach((row) => {
        row.forEach(cell => {
            if (cell === '_') count ++
        })
    })
    return count
}

function solution(m, n, board) {
    var answer = 0;
    let rotatedBd = Array
    .from({length: n}, (_, nIdx) => Array.from({length: m}, (_, mIdx) => board[m-1-mIdx][nIdx]))
    while (true){
        const eraseSpot = findBlock(rotatedBd)
        if (eraseSpot.length === 0){
            break 
        }
        rotatedBd = eraseBlock(rotatedBd, eraseSpot, m)
    }
    
    return countErase(rotatedBd);
}