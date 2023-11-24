function solution(survey, choices) {
    let answer = ''
    const STATIC_PERSONAL = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    const personal_type = {};
    
    STATIC_PERSONAL.forEach(pair => {
        pair.forEach(ele => personal_type[ele] = 0)
    })
    
    survey.forEach((ele, idx) => {
        const choice = choices[idx]
        if (choice <= 4) { personal_type[ele[0]] += 4 - choice}
        else { personal_type[ele[1]] += choice - 4}
    });
    
    STATIC_PERSONAL.forEach(([first, second])=> {
        if (personal_type[first] < personal_type[second]){
            answer += second
        } else {
            answer += first
        }
    })
    return answer;
}