function solution(n, times) {
    let [start, end] = [1, Number.MAX_SAFE_INTEGER]
    const result = []
    while (start <= end){
        let mid = Math.floor((start + end) / 2)
        const total = times.reduce((a, b) => a + Math.floor(mid/b), 0);
        if (total >= n) {
            end = mid - 1
            result.push(mid)
        } else {
            start = mid + 1
        }
    }
    
    return Math.min(...result);
}