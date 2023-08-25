function solution(keymap, targets) {
    const rst = []
    
    for(let i = 0; i < targets.length; i++) {
        const targetCnt = Array(targets[i].length).fill(0)
        
        for(let j = 0; j < targets[i].length; j++) {
            const targetChar = targets[i][j]
            
            for(let k = 0; k < keymap.length; k++) {
                
                for(let m = 0; m < keymap[k].length; m++) {
                    const keymapChar = keymap[k][m]
                    if(targetChar === keymapChar) {
                        if(targetCnt[j] > 0) targetCnt[j] = Math.min(targetCnt[j], m + 1)
                        else targetCnt[j] = m + 1
                    }
                }
            }
        }
        
        if(targetCnt.includes(0)) rst.push(-1)
        else {
            const cntSum = targetCnt.reduce((a, c) => a + c)
            cntSum > 0 ? rst.push(cntSum) : rst.push(-1)
        }
    }
    
    return rst
}