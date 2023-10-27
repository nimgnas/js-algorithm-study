function solution(X, Y) {
    const a = Array(10).fill(0)
    const b = Array(10).fill(0)
    
    X.split("").forEach((v) => a[Number(v)] += 1)
    Y.split("").forEach((v) => b[Number(v)] += 1)
    
    let arr = []
    for(let i = 0; i < 10; i++) {
        if(a[i] >= 1 && b[i] >= 1) {
            arr.push([i, Math.min(a[i], b[i])])
        }
    }
    
    arr = arr.sort((a, b) => b[0] - a[0])
    
    if(arr.length === 0) return "-1"
    
    let rst = ""
    for(const x of arr) {
        rst += (x[0] + "").repeat(x[1])

    }
    
    if(rst[0] === "0") rst = rst.substring(0, 1)
    return rst + ""
}