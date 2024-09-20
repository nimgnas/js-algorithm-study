function solution(N, road, K) {
    const dist = Array.from({length:N}, () => Array(N).fill(Infinity))
    dist.forEach((weight, index) => dist[index][index] = 0)

    road.forEach((nodes) => {
        const [sourceNode, targetNode, weight] = nodes
        const a = dist[sourceNode - 1][targetNode - 1]
        const b = dist[targetNode - 1][sourceNode - 1]
        dist[sourceNode - 1][targetNode - 1] = Math.min(a, weight)
        dist[targetNode - 1][sourceNode - 1] = Math.min(b, weight)
    })
    
    for(let k = 0; k < N; k++) {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    
    let answer = 0
    dist[0].forEach((weight) => {
        if(weight <= K) answer++
    })
    
    return answer
}