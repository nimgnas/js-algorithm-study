function solution(orders, course) {
    const answer = []
    const combi = {}
    for(let i = 0; i < orders.length; i++) {
        for(let j = 0; j < course.length; j++) {
            let tmp = ""
            getCombi(0, orders[i], course[j], tmp)
        }
    }
    
    for(let i = 0; i < course.length; i++) {
        const arr = []
        for(const x in combi) {
            if(x.length === course[i]) arr.push(combi[x])
        }
        const max = Math.max(...arr)
        
        for(const x in combi) {
            if(x.length === course[i] && combi[x] === max && combi[x] >= 2) answer.push(x)
        }
    }
    
    return answer.sort()
    
    function getCombi(s, order, num, tmp) {
        if(tmp.length === num) {
            tmp = tmp.split("").sort().join("")
            
            if(combi[tmp]) combi[tmp] = combi[tmp] + 1
            else combi[tmp] = 1
            return
        } else {
            for(let i = s; i < order.length; i++) {
                tmp += order[i]
                getCombi(i + 1, order, num, tmp)
                tmp = tmp.substring(0, tmp.length - 1)
            }
        }
    }
}
    