const numOfApples = 146;
const basket = numOfApples % 10 == 0 ? numOfApples / 10 : parseInt((numOfApples / 10)) + 1;
console.log(basket); 