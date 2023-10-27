function solution(order) {
    var answer = 0;
    let main = Array.from({length: order.length}, (_, idx) => order.length - idx)
    let sub = []
    for (let i = 0; i < order.length; i++){
        const box = order[i]
        let success = false
        while (main.length > 0 || sub.length > 0){
            if (main[main.length - 1] === box) {
                answer += 1
                main.pop(); 
                success = true
                break;
            }
            if (sub[sub.length - 1] === box){
                answer += 1
                sub.pop();
                success = true
                break
            }
            if (main.length === 0) break
            sub.push(main.pop())    
        }
        if (!success) break        
    }
    return answer;
}