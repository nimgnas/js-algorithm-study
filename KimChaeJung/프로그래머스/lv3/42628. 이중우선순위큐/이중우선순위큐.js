function solution(operations) {
    var answer = [];
    operations.forEach(ele => {
        const [ope, number] = ele.split(' ')
        if (ope === 'I'){
            answer.push(+number)
        } else {
            if (+number === 1){
                const maxIdx = answer.indexOf(Math.max(...answer))
                answer.splice(maxIdx, 1)
            } else {
                const minIdx = answer.indexOf(Math.min(...answer))
                answer.splice(minIdx, 1)
            }
        }
        
    })
    return answer.length === 0 ? [0, 0] : [Math.max(...answer), Math.min(...answer)];
}