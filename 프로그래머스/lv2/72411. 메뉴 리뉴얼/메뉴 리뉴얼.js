function combi(order, n){
    let answer = []
    if (n === 1) return order.map(ele => [ele])
    order.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1)
        const restCombis = combi(rest, n-1)
        const attached = restCombis.map((restCombi) => [fixed, ...restCombi])
        answer.push(...attached)
    })
    return answer
}

function isIncluded(a, b) {
    for (aEle of a.split('')){
        if (!b.includes(aEle)) return false
    }
    return true
}

function solution(orders, course) {
    var answer = [];
    const sortedOrders = orders.map(ele => ele.split('').sort().join('')).sort((a, b) => a.length - b.length)
    for (cour of course){
        let possibleCourArr = []
        let maxCount = 2
        for (let i = 0; i < sortedOrders.length-1; i++){
            if (sortedOrders[i].length < cour) continue
            else {
                let possibleCombi = combi(sortedOrders[i].split(''), cour)
                let possibleSet = []
                possibleCombi.forEach((ele) => {
                    let count = 1
                    for (let j = i+1; j < sortedOrders.length; j++){
                        if (isIncluded(ele.join(''), sortedOrders[j])){
                            count += 1
                        }
                    }
                    if (count >= 2){
                        possibleSet.push([ele.join(''), count])
                        maxCount = Math.max(count, maxCount)
                    }
                })                
                possibleCourArr.push(...possibleSet)
            }
        }
        answer.push(...possibleCourArr.filter(ele => ele[1] === maxCount).map(ele => ele[0]))
    }
    return answer.sort();
}