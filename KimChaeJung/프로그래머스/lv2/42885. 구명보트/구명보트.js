function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b)
    while (people.length > 0){
        let onBoard = people.pop();
        if (onBoard + people[0] <= limit) people.shift();
        answer +=1;
    }
    return answer;
}