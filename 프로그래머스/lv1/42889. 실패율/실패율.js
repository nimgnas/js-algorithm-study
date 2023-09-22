function solution(N, stages) {
    const stagePplCount = Array(N+1).fill(0)
    const failRatio = Array(N+1).fill(0)
    stages.forEach(ele =>{
        for (let i = 0; i < ele ; i++){
            stagePplCount[i] += 1
        }
    })
    for (let i = 1; i <= N; i++){
        const [curr, prev] = [stagePplCount[i], stagePplCount[i-1]]
        const [nume, deno] = [prev-curr, prev]
        let ratio = deno === 0 ? 0 : nume/deno
        failRatio[i] = ratio
    }

    return failRatio
    .map((ele, idx) => [ele, idx])
    .slice(1)
    .sort((a, b) => b[0] - a[0])
    .map(ele => ele[1])
}