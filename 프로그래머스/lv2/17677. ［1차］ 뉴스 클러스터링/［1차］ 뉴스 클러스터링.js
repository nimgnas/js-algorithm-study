const getUnionInterSection = (a, b) =>{
    const union = []
    let intersection = []
    while (true){
        if (a.length === 0 || b.length === 0) break
        const aEle = a.pop()
        intersection.push(aEle)
        let bLeft = b.slice(0)
        let bRight = []
        while (bLeft.length > 0){
            let bEle = bLeft.pop()
            if (bEle === aEle) {
                union.push(aEle)
                b = bLeft.concat(bRight)
                break
            } else {
                bRight.push(bEle)
            }
        }
    }
    intersection = intersection.concat(a, b)
    return [union, intersection]
}
function solution(str1, str2) {
    const isAlpha = (ch) => {
      return /^[A-Z]$/i.test(ch);
    }
    var answer = 0;
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    let setStr1 = []
    let setStr2 = []
    for (let i = 0; i < str1.length-1; i++){
        if (isAlpha(str1[i]) && isAlpha(str1[i+1])){
            setStr1.push(str1.substring(i, i+2))
        }
    }
    for (let i = 0; i < str2.length-1; i++){
        if (isAlpha(str2[i]) && isAlpha(str2[i+1])){
            setStr2.push(str2.substring(i, i+2))
        }
    }
    if (setStr1.length === 0 && setStr2.length === 0) return 65536
    const [union, intersection] = getUnionInterSection(setStr1, setStr2)
    const J = Math.floor((union.length / intersection.length)*65536)
    return J;
}