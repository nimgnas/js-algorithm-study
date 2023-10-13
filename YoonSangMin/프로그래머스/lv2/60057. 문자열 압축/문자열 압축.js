function solution(s) {
    let min = 10000
    for(let i = 1; i <= s.length; i++) {
        const stack = []
        
        let j
        for(j = 0; j < s.length + 1 - i; j += i) {
            let tmp = ""
            for(let k = j; k < j + i; k++) tmp += s[k]
            stack.push(tmp)
            tmp = ""
        }
        
        let tmp = ""
        while(j < s.length) {
            tmp += s[j]
            j++
        }
        if(tmp) stack.push(tmp)
        
        let stack2 = []
        let cnt = 1
        for(j = 0; j < stack.length; j++) {
            if(stack2[stack2.length - 1] === stack[j]) cnt++
            if(stack2[stack2.length - 1] !== stack[j]) {
                stack2.push(cnt, stack[j])
                cnt = 1
            }
        }
        stack2.push(cnt)
        
        stack2 = stack2.filter((v) => v !== 1)
        min = Math.min(min, stack2.join("").length)
    }
    
    return min
}