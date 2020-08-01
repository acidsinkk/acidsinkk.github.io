const getMoney = function (arr, discount, ship){
    let myDiscount = (100 - discount) / 100
    let quantity = arr.length
    let shipForOne = Math.round(ship / quantity * 100) / 100
    let priceWithDiscount = 0;
    let finalPrice = 0;
    let result = '';
    for (item in arr) {
        const person = arr[item]
        priceWithDiscount = Math.round(person.price * myDiscount * 100) / 100
        finalPrice = Math.round((priceWithDiscount + shipForOne) * 100) / 100
        result += `${person.name} должен ${finalPrice} рублей с учетом скидки ${discount}% и доставки за ${ship} рублей<br/>`;
    }

    return result;
}