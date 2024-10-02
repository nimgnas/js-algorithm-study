function solution(s, skip, index) {
    const skipObj = {}
    skip = [...skip]
    s = [...s]
    skip.forEach((v) => skipObj[v.charCodeAt()] = 1)
    
    let answer = []
    s.forEach((al) => {
        let uniAl = al.charCodeAt()
        for(let i = 0; i < index; i++) {
            uniAl++
            if(uniAl > 122) uniAl -= 26
            if(skipObj[uniAl] === 1) i--
        }
        answer.push(uniAl)
    })
    
    return answer.map((code) => String.fromCharCode(code)).join("")
}