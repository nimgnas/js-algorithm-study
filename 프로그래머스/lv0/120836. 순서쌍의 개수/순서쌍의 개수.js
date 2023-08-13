function solution(n) {
    const root = n**(1/2)
    let halfCount = 0
    for (let i = 1; i <= parseInt(root);i ++){
        if (n%i === 0) halfCount ++
    }
    return (root === parseInt(root)) ? (halfCount-1) * 2 + 1 : halfCount * 2
}