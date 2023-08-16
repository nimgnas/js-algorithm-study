function solution(sizes) {
    let maxFirst = 0
    let maxSecond = 0
    sizes.forEach((ele) => {
        const [first, second] = ele
        maxFirst = Math.max(maxFirst, Math.max(first, second))
        maxSecond = Math.max(maxSecond, Math.min(first, second))
    })
    return maxFirst * maxSecond;
}