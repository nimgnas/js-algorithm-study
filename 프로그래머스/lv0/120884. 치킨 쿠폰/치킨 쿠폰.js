function solution(chicken) {
  if (chicken < 10) {
    return 0;
  }

  let coupon = chicken;
  let serviceChicken = 0;

  while (coupon >= 10) {
    coupon -= 9;
    serviceChicken += 1;
  }

  return serviceChicken;
}

// 우수코드

function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    let serviceChicken = parseInt(coupon / 10);
    answer += serviceChicken;
    coupon = serviceChicken + (coupon % 10);
  }

  return answer;
}
