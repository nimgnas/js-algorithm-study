function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridgeQueue = Array(bridge_length).fill(0)
    const LAST = bridge_length - 1
    const getTotalWeight = (arr) => arr.reduce((a, b) => a+b, 0)
    
    for (const truck of truck_weights) {
        while (true){
            if (getTotalWeight(bridgeQueue) - bridgeQueue[LAST] + truck <= weight){
                break
            }
            bridgeQueue.unshift(0)
            bridgeQueue.pop()
            answer += 1
        }
        bridgeQueue.unshift(truck)
        bridgeQueue.pop()
        answer += 1
    }
    
    if (getTotalWeight(bridgeQueue) > 0){
        while (true) {
            if (getTotalWeight(bridgeQueue) === 0){
                break
            }
            bridgeQueue.unshift(0)
            bridgeQueue.pop()
            answer += 1
        }
    }
    
    return answer;
}