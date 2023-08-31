function solution(n, times) {    
    let lt = 1
    let rt = Number.MAX_SAFE_INTEGER
    let mid = 0

    const rst = []
    while(lt <= rt) {
        let mid = Math.floor((lt + rt) / 2)
        const done = count(times, mid)
        
        if(done >= n) {
            rt = mid - 1
            rst.push(mid)
        }
        
        if(done < n) lt = mid + 1
    }

    return Math.min(...rst)
}



function count(times, mid) {
    let cnt = 0
    for(let i = 0; i < times.length; i++) {
        cnt += Math.floor(mid / times[i])
    }
    return cnt
}

    // 7 14 21 28
    // 10 20 30 40 