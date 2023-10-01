function sliceByN(s, n){
    let sliced = []
    for (let i = 0; i < s.length; i+=n){
        sliced.push(s.substring(i, i+n))
    }
    return sliced
}

function solution(s) {
    var answer = s.length;
    for (let i = 1; i <= s.length/2; i++){
        const arr = sliceByN(s, i)
        const reduced = arr.reduce((a, b, idx) => {
            if (idx === 0) return ['', b, 1]
            if (a[1] === b) a[2] += 1
            else {
                a[0] = a[0] + (a[2] === 1? '' : a[2]) + a[1] 
                a[1] = b
                a[2] = 1
            }
            if (idx === arr.length -1){
                return a[0] + (a[2] === 1? '': a[2]) + a[1]
            }
            return a
        }, ['', '', 0])
        answer = Math.min(answer, reduced.length)
    }
    return answer;
}