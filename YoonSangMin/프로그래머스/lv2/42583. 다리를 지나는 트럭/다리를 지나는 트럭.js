function solution(bridge_length, weight, truck_weights) {
    const queue = Array(bridge_length).fill(0)
    
    let cnt = 0
    let i = 0
    let sum = 0
    
    const end = []
    while(queue.length) {
        const dequeue = queue.shift()
        sum -= dequeue
        
        if(i < truck_weights.length && sum + truck_weights[i] <= weight) {
            queue.push(truck_weights[i])
            sum += truck_weights[i++]
        } else if(i < truck_weights.length) queue.push(0)
        
        if(dequeue > 0) end.push(dequeue)

        cnt++
        if(end.length === truck_weights.length) break
    }
    
    return cnt
}