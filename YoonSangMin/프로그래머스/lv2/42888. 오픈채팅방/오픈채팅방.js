function solution(record) {
    const uidMatch = {}
    const answer = []
    
    for(let i  = 0; i < record.length; i++) {
        const [state, uid, nickname] = record[i].split(" ")
        
        if(state === "Change") uidMatch[uid] = nickname
        if(state === "Leave") answer.push([uid, "님이 나갔습니다."])
        if(state === "Enter") {
            uidMatch[uid] = nickname
            answer.push([uid, "님이 들어왔습니다."])
        }
    }
    
    return answer.map((v) => uidMatch[v[0]] + v[1])
}