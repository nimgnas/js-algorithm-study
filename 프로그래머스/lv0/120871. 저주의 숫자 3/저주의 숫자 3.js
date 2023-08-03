function solution(n) {
    const numberArray = new Array(300).fill(null).map((ele, idx) => idx)
    const townNumberArray = numberArray.filter((ele) => {
        if (ele % 3 === 0 || (ele + '').indexOf('3') > -1){
            return false
        }
        return true
    })
    return townNumberArray[n-1];
}