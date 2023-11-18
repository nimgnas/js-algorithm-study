function solution(s) {
    s = s.toLowerCase().split(" ")
    
    for(let i = 0; i < s.length; i++) {
        const firstChar = s[i][0]
        if(/[a-z]/.test(firstChar) && firstChar) {
            s[i] = s[i][0].toUpperCase() + s[i].slice(1)
        }
    }
    
    return s.join(" ")
}
