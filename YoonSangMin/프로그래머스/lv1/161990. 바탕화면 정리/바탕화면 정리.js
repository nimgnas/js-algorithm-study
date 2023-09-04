function solution(wallpaper) {
    const arr = [-1, 51, -1, -1] 
    
    for(let i = 0; i < wallpaper.length; i++) {
        const firstIdx = wallpaper[i].indexOf("#")
        const lastIdx = wallpaper[i].lastIndexOf("#")
        if(firstIdx >= 0) {
            if(arr[0] < 0) arr[0] = i
            if(arr[1] > firstIdx) arr[1] = firstIdx
            arr[2] = i + 1
            if(arr[3] <= lastIdx) arr[3] = lastIdx + 1    
        }
    }
    
    return arr
}