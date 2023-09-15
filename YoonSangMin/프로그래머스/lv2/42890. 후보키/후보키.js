function solution(relation) {
    const unique = []
    
    for(let i = 1; i <= relation[0].length; i++) {
        let tmp = Array.from({length : i}, () => 0)
        DFS(0, 0, tmp)
    }
    
    function DFS(L, s, tmp) {
        if(L === tmp.length) {
            const check = []
            for(let i = 0; i < relation.length; i++) {
                let sum = ""
                for(let j = 0; j < tmp.length; j++) {
                    sum += relation[i][tmp[j]]
                }
                if(check.includes(sum)) break
                check.push(sum)
            }
            if(relation.length === check.length) unique.push([...tmp])
        } else {
            for(let i = s; i < relation[0].length; i++) {
                tmp[L] = i
                DFS(L + 1, i + 1, tmp)
            }
        }
    }

    let cnt = 0
    for(let i = 0; i < unique.length; i++) {
        cnt++
        for(let j = i + 1; j < unique.length; j++) {
            const A = unique[i].join("")
            let B = unique[j].join("")
            
            for(let x of A) {
                for(let i = 0; i < B.length; i++) {
                    B = B.replace(x, "")
                }
            }
            if(unique[j].length - A.length === B.length) unique.splice(j--, 1)
        }
    }
    
    return unique.length
}


