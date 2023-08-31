function solution(s){
    const left = []
    const right = [...s].reverse()
    while (right.length > 0){
        const temp = right.pop();
        (left[left.length -1]+temp === '()') ? left.pop() : left.push(temp)
    }
    return left.length === 0 
}