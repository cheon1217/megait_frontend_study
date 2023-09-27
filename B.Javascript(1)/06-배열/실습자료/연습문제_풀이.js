/** 문제 1 */
const check_list = [true, false, false, true, false];
console.log("before --> " + check_list);

for (let i=0; i<check_list.length; i++) {
    check_list[i] = !check_list[i];
}

console.log("after --> " + check_list);

/** 문제 2 */
const grade = [75, 82, 91];

let sum = 0;
let avg = 0;

for (let g of grade) {
    sum += g;
}

avg = sum / grade.length;

console.log(`총점: ${sum}, 평균: ${avg}`);

/** 문제 3 */
const time = [7, 5, 5, 5, 5, 10 ,7];

let pay = 0;

for (let i=0; i<time.length; i++) {
    // case 1
    // if (i < 4) {
    //     pay += time[i] * 4500;
    // } else {
    //     pay += time[i] * 5200;
    // }

    // case 2
    let money = i < 4 ? 4500 : 5200;
    pay += time[i] * money;
}

console.log(pay);

/** 문제 4*/
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];

let money = 0;

for (let i=0; i<price.length; i++) {
    money += price[i] * qty[i];
}

console.log(money);

/** 문제 5 */
let max = price[0] * qty[0];

for (let i=1; i<price.length; i++) {
    if (max < price[i] * qty[i]) {
        max = price[i] * qty[i];
    }
}

console.log(max);

/** 문제 6 */
let count = 0;

for (let i=0; i<price.length; i++) {
    if (price[i] * qty[i] >= 80000) {
        count++;
    }
}

console.log(count);

/** 문제 7 */
