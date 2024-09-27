function solution(id_list, report, k) {
    const reportObj = {}
    const naObj = {}
    
    id_list.forEach((id) => {
        reportObj[id] = 0
        naObj[id] = new Set()
    })
    
    report.forEach((v) => {
        const [a, b] = v.split(" ")
        naObj[a].add(b)
    })
    
    for(v in naObj) {
        naObj[v].forEach((id) => reportObj[id] = reportObj[id] + 1)
    }
    
    const answer = []
    for(v in naObj) {
        let cnt = 0
        naObj[v].forEach((v) => {
            if(reportObj[v] >= k) cnt++
        })
        answer.push(cnt)
    }
    
    return answer
    
}