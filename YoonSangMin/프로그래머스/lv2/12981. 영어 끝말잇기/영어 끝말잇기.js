function solution(n, words) {
    const arr = Array(n).fill("")
    const obj = {}
    
    let cnt = 1
    arr[0] = words[0]
    obj[words[0]] = 1
    
    while(cnt < words.length) {
        const prev = cnt % n === 0 ? arr[arr.length - 1] : arr[cnt % n - 1]
        const cur = words[cnt % words.length]
        if(prev[prev.length - 1] !== cur[0] || obj[cur]) break
        else {
            arr[cnt % n] = cur
            obj[cur] = 1
        }
        cnt++
    }
    
    return cnt === words.length ? [0, 0] : [cnt % n + 1, Math.floor(cnt / n + 1)]    
}