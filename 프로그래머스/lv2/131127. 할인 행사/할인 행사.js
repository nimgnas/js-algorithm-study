function solution(want, number, discount) {
    var answer = 0;
    
    for (let i = 0; i <= discount.length - 10; i++){
        let saleArr = discount.slice(i, i+10)
        let currWantArr = number.slice(0)
        
        saleArr.forEach(ele => {
            const productIdx = want.indexOf(ele)
            if (productIdx != -1){
                currWantArr[productIdx] -= 1
            }
        })
        
        let zeroCount = 0
        for (let j = 0; j < currWantArr.length; j++){
            if (currWantArr[j] === 0) zeroCount += 1
        }
        if (zeroCount === currWantArr.length) answer += 1
    }
    return answer;
}