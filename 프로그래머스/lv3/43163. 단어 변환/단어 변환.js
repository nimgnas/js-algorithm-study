


function solution(begin, target, words) {
    if (words.indexOf(target) === -1) return 0
    function canConvert(toBe, asIs) {
        let diffCount = 0;
        [...toBe].forEach((ele, idx) => diffCount += (ele != asIs[idx]) ? 1 : 0)
        return diffCount === 1 ? true : false
    }
    
    let minConvertCount = words.length + 1;
    function backTracking(current, visited, count) {
        if (current === target) {
            minConvertCount = Math.min(minConvertCount, count)
            return
        }
        if (visited.length === words.length) return 
        for (const word of words){
            if (visited.indexOf(word) != -1) continue
            // if ([...new Set(current+word)].length != target.length + 1) continue
            if (!canConvert(current, word)) continue
            visited.push(word)
            backTracking(word, visited, count +1)
            visited.pop()
        }
    }
    backTracking(begin, [], 0)
    
    return minConvertCount;
}