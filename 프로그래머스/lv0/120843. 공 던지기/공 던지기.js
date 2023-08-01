function solution(numbers, k) {
    const numbersLength = numbers.length
    const basicIdx = ((2*k-1) % numbersLength)-1
    return basicIdx === -1 ? numbers[numbersLength - 1] : numbers[basicIdx];
}