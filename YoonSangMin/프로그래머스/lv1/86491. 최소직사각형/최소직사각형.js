function solution(sizes) {
    let answer = 0;
    sizes.forEach((v) => v.sort((a, b) => b - a))
    const width = [...sizes].sort((a, b) => b[0] - a[0])
    const height = [...sizes].sort((a, b) => b[1] - a[1])

    return width[0][0] * height[0][1]
}