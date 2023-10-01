function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    const count = (arr, target) => arr.filter(ele => target === ele).length
    while (true){
        if (deliveries.length + pickups.length === 0) break
        let truck = cap
        let pickupIdx = pickups.length
        let deliveryIdx = deliveries.length
        let isPickIdxFixed = false
        let isDeliIdxFixed = false
        while (true){
          if (deliveries[deliveries.length - 1] > truck){
            deliveries[deliveries.length - 1] -= truck
            if (!isDeliIdxFixed) deliveryIdx = deliveries.length
            truck = 0
            break
          }
          if (deliveries[deliveries.length - 1] != 0){
            if (!isDeliIdxFixed){
              deliveryIdx = deliveries.length
              isDeliIdxFixed = true
            }
          }
          truck -= deliveries.pop()
          if (truck === 0) break
          if (deliveries.length === 0) {
            truck = 0
            if (!isDeliIdxFixed) deliveryIdx = 0
            break
          }
        }
      while (true) {
        if (pickups[pickups.length-1] > (cap - truck) ){
          pickups[pickups.length -1] -= cap - truck
          truck = cap
          if (!isPickIdxFixed) pickupIdx = pickups.length
          break
        } 
        if (pickups[pickups.length - 1] != 0){
          if (!isPickIdxFixed){
            pickupIdx = pickups.length
            isPickIdxFixed = true
          }
        }
        truck += pickups.pop()
        if (truck === cap) break
        if (pickups.length === 0) {
          if (!isPickIdxFixed) pickupIdx = 0
          break
        }
      }
      answer += Math.max(pickupIdx , deliveryIdx ) * 2
    }
    return answer;
}