function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    goal.forEach((ele) => {
        if (cards1[0] == ele)  cards1.shift()
        else if (cards2[0] == ele) cards2.shift()
        else answer = 'No'
    })
    return answer;
}