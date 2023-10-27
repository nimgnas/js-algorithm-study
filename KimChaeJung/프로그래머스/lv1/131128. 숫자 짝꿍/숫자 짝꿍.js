function solution(X, Y) {
    const numArr = Array(10).fill(0)
    const countNum = (str) => {
        const strNumArr = numArr.slice(0)
        str.split('').forEach(ele => strNumArr[ele]+=1)
        return strNumArr
    }
    
    const xArr = countNum(X)
    const yArr = countNum(Y)
    
    const intersection = numArr.slice(0)
    numArr.forEach((_, idx) => {
        intersection[idx]= Math.min(xArr[idx], yArr[idx])
    })
    
    const answer = intersection.reverse().reduce((prev, ele, idx) => {
        if (idx === 9 && prev.length === 0 && ele != 0) return '0'
        return prev + (''+(9-idx)).repeat(ele)
    }, '')
    
    return answer === ''?"-1":answer;
}