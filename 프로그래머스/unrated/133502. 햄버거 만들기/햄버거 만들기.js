function solution(ingredient) {
    var answer = 0;
    
    const stack = []  
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i])

        if(stack.length >= 4) {
            let tmp = ""
            for(let j = stack.length - 4; j < stack.length; j++) {
                tmp += stack[j]
            }
            
            if(tmp === "1231") {
                answer ++
                for(let j = 0; j < 4; j++) stack.pop()
            }
        } 
    }
    
    return answer;
}