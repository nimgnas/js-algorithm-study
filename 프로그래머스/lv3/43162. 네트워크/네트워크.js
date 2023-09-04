function solution(n, computers) {
    const queue = []
    const ch = Array(n).fill(0)
    let cnt = 0
    
    for(let i = 0; i < n; i++) {
        if(ch[i] === 0) {
            ch[i] = 1
            queue.push(computers[i])
            cnt++
        }
        
        while(queue.length) {
            for(let j = 0; j < queue.length; j++) {
                const computer = queue.shift()
                
                for(let k = 0; k < computer.length; k++) {
                    if(computer[k] === 1 && ch[k] === 0) {
                        ch[k] = 1
                        queue.push(computers[k])
                    }
                }
            }
        }
    }
    
    return cnt
}