function solution(numbers) {
    numbers = numbers.map((number) => String(number))
    numbers.sort((a, b) => Number(b + a) - Number(a + b))
    numbers = numbers[0] === "0" ? ["0"] : numbers

    return  numbers.join("")
}