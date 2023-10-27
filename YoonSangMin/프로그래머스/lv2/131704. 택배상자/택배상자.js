function solution(order) {
    const stack = []
    const rst = []
    const arr = Array.from({length : order.length}, (_, i) => i + 1)
    
    let orderIdx = 0
    for(let i = 0 ; i < arr.length; i++) {
        stack.push(arr[i])
        
        if(stack[stack.length - 1] === order[orderIdx]) {
            while(stack.length >= 1 && stack[stack.length - 1] === order[orderIdx]) {
                rst.push(stack.pop())
                orderIdx++
            }
        }
    }
    
    
    return rst.length
}