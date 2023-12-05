function solution(prices) {
    const rst = []
    let stack = []
    
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            stack.push(prices[j])
            if(prices[j] < prices[i]) break
        }
        rst.push(stack.length)
        stack = []
    }
    
    return rst
}