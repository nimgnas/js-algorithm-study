function solution(want, number, discount) {
    let cnt = 0
    
    const wantObj = {}
    for(let i = 0; i < want.length; i++) {
        for(let j = 0; j < number[i]; j++) {
            wantObj[want[i]] ? wantObj[want[i]] = wantObj[want[i]] + 1 : wantObj[want[i]] = 1
        }
    }
    
    for(let i = 0; i < discount.length - 9; i++) {
        const copyObj = Object.assign({}, wantObj)
        for(let j = i; j < i + 10; j++) {
            if(!copyObj[discount[j]]) break
            else {
                copyObj[discount[j]] = copyObj[discount[j]] - 1
                if(copyObj[discount[j]] === 0) delete copyObj[discount[j]]
            }
        }
        if(Object.keys(copyObj).length === 0) cnt++
    }
    
    return cnt
}