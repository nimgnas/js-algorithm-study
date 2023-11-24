function solution(survey, choices) {
    const type = ["R", "T", "C", "F", "J", "M", "A", "N"]
    const point = [0, 0, 0, 0, 0, 0, 0, 0]
    const tp = [3, 2, 1, 0, 1, 2, 3]
    
    for(let i = 0; i < survey.length; i++) {
        let T = ""
        
        if(choices[i] >= 5) {
            T = survey[i][1]
        }
        else if(choices[i] <= 3) {
            T = survey[i][0]
        }
        
        const idx = type.findIndex((v) => v === T)
        point[idx] += tp[choices[i] - 1]
    }
    
    
    let rst = ""
    for(let i = 0; i < point.length; i += 2) {
        if(point[i] >= point[i + 1]) {
            rst += type[i]
        } else {
            rst += type[i + 1]
        }
    }
    
    return rst
}


