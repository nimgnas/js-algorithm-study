def sortElement(arr):
    arr.sort()
    return arr

def solution(sizes):
    sortedSizes = list(map(sortElement, sizes))
    
    maxW = 0
    maxH = 0
    
    for [w, h] in sortedSizes:
        maxW = max(w, maxW)
        maxH = max(h, maxH)
    
    return maxW*maxH


# 다른 사람 풀이
def solution(sizes):
    maxW = 0
    maxH = 0
    
    for w, h in sizes:
        if w < h:
            w, h = h, w
        
        maxW = max(w, maxW)
        maxH = max(h, maxH)
    
    return maxW * maxH