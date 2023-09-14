function isCKey(relation, key) {
    let data = new Set([])
    relation.forEach(row => {
        const rowData = row.filter((_, idx) => key.includes(idx)).join('')
        data.add(rowData)
    })
    return data.size === relation.length  
}

function getCombi(array, selectNumber) {
    if (selectNumber === 1) return array.map(ele => [ele])
    const results = []
    array.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx+1)
        const combi = getCombi(rest, selectNumber-1)
        const attach = combi.map(comb => [fixed, ...comb])
        results.push(...attach)
    })
    return results
}

function solution(relation) {
    var answer = 0;
    const arr = []
    const numberArr = Array.from({length: relation[0].length}, (_, idx) => idx)
    for (let i = 1; i < relation[0].length; i++){
        const possible = getCombi(numberArr, i)
        possible.forEach(ele => {
            if (i === 1) {
                if (isCKey(relation, ele)){
                    arr.push(ele)
                    answer += 1
                }
            } else {
                let minimality = true
                arr.forEach((ar) => {
                    if(ar.filter(v => !ele.includes(v)).length === 0){
                        minimality = false
                    }
                })
                if (minimality) {
                    if (isCKey(relation, ele)){
                        arr.push(ele)
                        answer += 1
                    }
                }
            }
            
        })
    }
    return answer === 0 ? 1 : answer;
}