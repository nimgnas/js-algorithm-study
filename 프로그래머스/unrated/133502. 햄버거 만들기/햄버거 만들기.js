function solution(ingredient) {
    let answer = 0;
    let left_stack = [];
    let right_stack = ingredient.slice(0).reverse();
    while (right_stack.length > 0) {
        const rlidx = right_stack.length - 1
        if (right_stack[rlidx] === 3 && right_stack[rlidx -1] === 1){
            const last_idx = left_stack.length - 1
            if (left_stack[last_idx] === 2 && left_stack[last_idx-1] === 1){
                left_stack.pop()
                left_stack.pop()
                right_stack.pop()
                right_stack.pop()
                answer += 1
                continue
            }
        }
        left_stack.push(right_stack.pop());
    }
    return answer;
}