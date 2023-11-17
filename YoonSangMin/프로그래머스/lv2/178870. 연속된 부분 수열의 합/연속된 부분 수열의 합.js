function solution(sequence, k) {
    let rst = []
    let lt = 0
    
    let sum = 0
    for(let rt = 0; rt < sequence.length; rt++) {
        sum += sequence[rt]        
        if(sum > k || rt === sequence.length - 1) {
            while(sum > k) {
                sum -= sequence[lt++]
            }
        }
        
        if(sum === k) {
            rst.push([lt, rt])
        }
    }
    
    rst = rst.map((v) => [...v, v[1] - v[0]]).sort((a, b) => a[2] - b[2])
    return rst[0].slice(0, 2)
}