function solution(park, routes) {
    let dogCoordinate = []
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park.length; j++) {
            if(park[i][j] === "S") {
                dogCoordinate = [i,j]
                break
            }
        }
    }
    
    const routesObj = { E: [0, 1], S: [1, 0], W: [0, -1], N: [-1, 0] }
    
    const check = (coordinate) => {
        if(coordinate[0] >= park.length || coordinate[1] >= park[0].length || coordinate[0] < 0 || coordinate[1] < 0) return false 
        if(park[coordinate[0]][coordinate[1]] === "X") return false

        return true
    }
    
    routes.forEach((route) => {
        const [EWSN, m] = route.split(" ")
        const tmp = [...dogCoordinate]

        for(let i = 0; i < m; i++) {
            dogCoordinate[0] = dogCoordinate[0] + routesObj[EWSN][0]
            dogCoordinate[1] = dogCoordinate[1] + routesObj[EWSN][1]
            
            if(!check(dogCoordinate)) {
                dogCoordinate = tmp
                break
            }
        }
    })
    
    return dogCoordinate
}