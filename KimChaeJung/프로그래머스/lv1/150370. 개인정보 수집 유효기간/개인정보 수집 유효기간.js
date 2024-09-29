function getDiffDate(curr, start){
    const [currY, currM, currD] = curr
    const [startY, startM, startD] = start
    
    const totalCurrDates = (currY - 2000)*12*28 + currM*28 + +currD
    const totalStartDates = (startY - 2000)*12*28 + startM*28 + +startD
    
    return totalCurrDates - totalStartDates
}

function solution(today, terms, privacies) {
    const [currY, currM, currD] = today.split('.')
    const termObj = {}
    terms.forEach(term => {
        const [type, storeMonth] = term.split(' ')
        termObj[type] = +storeMonth
    })
    
    const answer = []
    
    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(' ')
        const [startY,startM,startD] = date.split('.')
        const diffDates = getDiffDate([currY, currM, currD], [startY, startM, startD])
        const maxDiffDates = termObj[termType]*28
        
        // 파기 안되면
        if (!(diffDates < maxDiffDates)){
            answer.push(index+1)
        }
    })
    
    return answer;
}