/** 문제 3 */

// 현재 갖고 있는 사과의 수를 의미하는 numOfApples 변수에 123이라는 값이 할당
const numOfApples = 123;

// 10개씩 담았을 경우 남는 사과가 몇개인지 구함
const extra = numOfApples % 10;
console.log(`나머지=${extra}`);

// 10개씩 담고 남은 사과를 담기 위한 바구니
const extraBasket = extra == 0 ? 0 : 1;

// 10개씩 나누어 담았을 경우 바구니 수
let basketCount = (numOfApples - extra) / 10 + extraBasket;
console.log(`바구니 수=${basketCount}`);