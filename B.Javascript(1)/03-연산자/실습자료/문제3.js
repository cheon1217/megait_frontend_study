const numOfApples = 121;
const cnt = parseInt(numOfApples / 10);
const basketCnt = numOfApples % 10 == 0 ? cnt : cnt + 1;
console.log(basketCnt); 