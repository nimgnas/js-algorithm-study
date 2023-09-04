function solution(people, limit) {
    people.sort((a, b) => b - a)
    
    let cnt = 0
    for(let i = 0; i < people.length; i++) {
        if(people[i] + people[people.length - 1] <= limit) {
            people.pop()
            cnt++
        } else cnt++
    }
    
    return cnt
}

