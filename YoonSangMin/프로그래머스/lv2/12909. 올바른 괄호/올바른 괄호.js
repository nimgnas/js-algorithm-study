function solution(s) {
    const stack = []
    
    for(const x of s) {
        if(stack[stack.length - 1] + x === "()") stack.pop()
        else stack.push(x)
    }
    
    return stack.length ? false : true
}