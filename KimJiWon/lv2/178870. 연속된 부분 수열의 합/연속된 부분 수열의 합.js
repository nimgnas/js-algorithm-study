function solution(sequence, k) {    
   let array = [];
    let sum = 0;
    let front = 0;
    
    for(let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
        if(sum > k) {
            while(sum > k) {
                sum -= sequence[front++];
            }
        } 
        if(sum == k) {
            array.push([front, i])
        }
    }
    let answer = [];
    let min = sequence.length;
    array.forEach(ele => {
        if (min > (ele[1] - ele[0])) {
            min = (ele[1] - ele[0]);
            answer = [ele[0], ele[1]];
        }
    })
    
    return answer;
}