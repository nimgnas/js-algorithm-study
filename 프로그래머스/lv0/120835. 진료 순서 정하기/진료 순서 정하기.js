function solution(emergency) {
    return emergency.map((ele, idx) => [idx, ele])
                    .sort((a,b) => b[1] - a[1])
                    .map((ele, idx) => {
                        const [originIdx, emerIdx] = ele
                        return [idx, originIdx]
                    })
                    .sort((a, b) => a[1] - b[1])
                    .map((ele) => {
                        const [sortedIdx, origin] = ele
                        return sortedIdx+1
                    })
}