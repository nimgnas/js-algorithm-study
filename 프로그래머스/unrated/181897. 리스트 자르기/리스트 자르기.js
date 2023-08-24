function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    const rangeByNObj = {
        1:[0, b+1, 1], 
        2:[a, num_list.length, 1], 
        3:[a, b+1, 1], 
        4:[a, b+1, c]
    };
    const [start, end, step] = rangeByNObj[n]
    return num_list.slice(start, end).filter((_, idx) => idx % step === 0);
}