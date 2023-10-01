// 35.0 / 100 시간 초과
function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  const count = (arr, target) => arr.filter((ele) => target === ele).length;
  while (true) {
    if (count(deliveries, 0) + count(pickups, 0) === n * 2) break;
    let truck = cap;
    let lastDelivery = 0;
    let lastPickup = 0;
    for (let i = n - 1; i >= 0; i--) {
      if (deliveries[i] === 0 && pickups[i] === 0) continue;
      lastPickup = Math.max(lastPickup, i);
      if (deliveries[i] === 0) continue;
      lastDelivery = Math.max(i, lastDelivery);
      let delivery = Math.min(truck, deliveries[i]);
      truck -= delivery;
      deliveries[i] -= delivery;
      if (truck === 0) break;
    }
    for (let j = lastPickup; j >= 0; j--) {
      if (pickups[j] === 0) continue;
      let pickup = Math.min(cap - truck, pickups[j]);
      truck += pickup;
      pickups[j] -= pickup;
      if (truck === cap) break;
    }
    answer += Math.max(lastDelivery + 1, lastPickup + 1) * 2;
  }
  return answer;
}

// 55.0 / 100 실패
function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  const count = (arr, target) => arr.filter((ele) => target === ele).length;
  while (true) {
    if (deliveries.length + pickups.length === 0) break;
    let truck = cap;
    let pickupIdx = pickups.length;
    let deliveryIdx = deliveries.length;
    let isPickIdxFixed = false;
    let isDeliIdxFixed = false;
    while (true) {
      if (deliveries[deliveries.length - 1] > truck) {
        deliveries[deliveries.length - 1] -= truck;
        truck = 0;
        break;
      }
      if (deliveries[deliveries.length - 1] != 0) {
        if (!isDeliIdxFixed) {
          deliveryIdx = deliveries.length;
          isDeliIdxFixed = true;
        }
      }
      truck -= deliveries.pop();
      if (truck === 0) break;
      if (deliveries.length === 0) {
        truck = 0;
        break;
      }
    }
    while (true) {
      if (pickups[pickups.length - 1] > cap - truck) {
        pickups[pickups.length - 1] -= cap - truck;
        truck = cap;
        break;
      }
      if (pickups[pickups.length - 1] != 0) {
        if (!isPickIdxFixed) {
          pickupIdx = pickups.length;
          isPickIdxFixed = true;
        }
      }
      truck += pickups.pop();
      if (truck === cap) break;
      if (pickups.length === 0) break;
    }
    answer += Math.max(pickupIdx, deliveryIdx) * 2;
  }
  return answer;
}

function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  const count = (arr, target) => arr.filter((ele) => target === ele).length;
  while (true) {
    if (deliveries.length + pickups.length === 0) break;
    let truck = cap;
    let pickupIdx = pickups.length;
    let deliveryIdx = deliveries.length;
    let isPickIdxFixed = false;
    let isDeliIdxFixed = false;
    while (true) {
      if (deliveries[deliveries.length - 1] > truck) {
        deliveries[deliveries.length - 1] -= truck;
        if (!isDeliIdxFixed) deliveryIdx = deliveries.length;
        truck = 0;
        break;
      }
      if (deliveries[deliveries.length - 1] != 0) {
        if (!isDeliIdxFixed) {
          deliveryIdx = deliveries.length;
          isDeliIdxFixed = true;
        }
      }
      truck -= deliveries.pop();
      if (truck === 0) break;
      if (deliveries.length === 0) {
        truck = 0;
        if (!isDeliIdxFixed) deliveryIdx = 0;
        break;
      }
    }
    while (true) {
      if (pickups[pickups.length - 1] > cap - truck) {
        pickups[pickups.length - 1] -= cap - truck;
        truck = cap;
        if (!isPickIdxFixed) pickupIdx = pickups.length;
        break;
      }
      if (pickups[pickups.length - 1] != 0) {
        if (!isPickIdxFixed) {
          pickupIdx = pickups.length;
          isPickIdxFixed = true;
        }
      }
      truck += pickups.pop();
      if (truck === cap) break;
      if (pickups.length === 0) {
        if (!isPickIdxFixed) pickupIdx = 0;
        break;
      }
    }
    answer += Math.max(pickupIdx, deliveryIdx) * 2;
  }
  return answer;
}
