function solution(today, terms, privacies) {
    let answer = []
    const [todayYear, todayMonth, todayday] = today.split(".").map((v) => parseInt(v))
    const formattedToday = (todayYear * 12 * 28) + ((todayMonth - 1) * 28) + todayday
    
    const termsObj = {}
    terms.forEach((term) => {
        const [type, expiryDate] = term.split(" ")
        termsObj[type] = parseInt(expiryDate)
    })
    
    privacies.map((privacy, index) => {
        const [date, type] = privacy.split(" ")
        const [year, month, day] = date.split(".").map((v) => parseInt(v))
        const formattedDate = (year * 12 * 28) + ((month - 1) * 28) + day
        
        const typeCount = termsObj[type] * 28
        if(formattedToday - formattedDate >= typeCount) answer.push(index + 1)
    })
    
    return answer;
}