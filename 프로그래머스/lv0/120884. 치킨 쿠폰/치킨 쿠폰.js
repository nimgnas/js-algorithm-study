function solution(chicken) {
    
    if (chicken < 10){
        return 0
    }
    
    let coupon = chicken;
    let serviceChicken = 0;
    
    while (coupon >= 10){
        coupon -= 9
        serviceChicken += 1
    }
    
    return serviceChicken;
}