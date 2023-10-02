/** 문제 1 */
const check_list = [true, false, false, true, false];
console.log("before --> " + check_list);

for (let i = 0; i < check_list.length; i++) {

   if (check_list[i] == true) {
        check_list[i] = false;
   } else {
        check_list[i] = true;
   }

}

console.log("after --> " + check_list);

/** 문제 2 */
const grade = [75, 82, 91];

let gradeSum = 0;

for (let i = 0; i<grade.length; i++) {
    gradeSum += grade[i];
}

let gradeAvg = gradeSum / grade.length;

console.log("배열의 총점 : " + gradeSum);
console.log("배열의 평균 : " + gradeAvg);

/** 문제 3 */
const workTime1 = [7, 5, 5, 5];
const workTime2 = [5, 10, 7];

let salary1 = 0;
let salary2 = 0;

for (let i=0; i<workTime1.length; i++) {
    salary1 += (4500 * workTime1[i]);
}

for (let i=0; i<workTime2.length; i++) {
    salary2 += (5200 * workTime2[i]);
}

let salarySum = salary1 + salary2;

console.log("총 급여 : " + salarySum + "원");

/** 문제 4 */
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];

let totalMoney = 0;

for (let i=0; i<4; i++) {
    totalMoney += (price[i] * qty[i]);
}

console.log("총 결제금액 : " + totalMoney + "원");

/** 문제 5 */
let max = price[0] * qty[0];
for (let i=1; i<4; i++) {
    

    if (max < price[i] * qty[i]) {
        max = price[i] * qty[i];
    }

}

console.log("상품금액이 가장 비싼 항목 : " + max + "원");

/** 문제 6 */
let deliveryPriceFreeCnt = 0;
for (let i=0; i<4; i++) {
    if (price[i] * qty[i] >= 80000) {
        deliveryPriceFreeCnt++;
    }
}

console.log("무료로 배송되는 항목의 개수 : " + deliveryPriceFreeCnt + "개");

/** 문제 7 */
const money = [209000, 109000, 119000, 109000, 94000];

for (let i=0; i<money.length - 1; i++) {
    for (let j=i+1; j<money.length; j++) {
        if (money[i] > money[j]) {
            const tmp = money[i];
            money[i] = money[j];
            money[j] = tmp;
        }
    }
}

console.log(money);

/** 문제 8 */
const arr = [5, 3, 2, 8, 9];

const p = arr.length % 2 == 0 ? arr.length / 2 : (arr.length - 1) / 2;

for (let i=0; i<p; i++) {
    const k = arr.length - i - 1;

    const tmp = arr[i];
    arr[i] = arr[k];
    arr[k] = tmp;
}

console.log(arr);

/** 문제 9 */
const student = ["둘리", "도우너", "또치", "희동"];
const point = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];

let class_avgSum = 0;

for (let i=0; i<point.length; i++) {
    let personal_pointSum = 0;

    for (let j=0; j<point[i].length; j++) {
        personal_pointSum += point[i][j];
    }

    const personal_avg = personal_pointSum / point[i].length;
    class_avgSum += personal_avg;

    console.log("%s 총점 : %d점, 평균 : %d점", student[i], personal_pointSum, personal_avg);
}

console.log("반 평균 총점 : " + class_avgSum);

/** 문제 10 */
let class_avgSum_avg = class_avgSum / point.length;
console.log("반 평균 : " + class_avgSum_avg);

/** 문제 11 */
const item = [
    [500, 291],
    [320, 586],
    [100, 460],
    [120, 558],
    [92, 18],
    [20, 72]
];

let totalGold = 0;

for (let i=0; i<item.length; i++) {
    let single_totalGold = 0;
    totalGold += ((item[i][0] * 0.9) * item[i][1]);
    single_totalGold += ((item[i][0] * 0.9) * item[i][1]);
    console.log("아이템 한개당 판매가격 : " + single_totalGold + "원");
}

console.log("총 판매가격 : " + totalGold + "원");

/** 문제 12 */
const name = ["재석", "민영", "종민", "광수", "승기", "새정"];
const points = [82, 91, 54, 62, 88, 90];

for (let i=0; i<points.length - 1; i++) {
    for (let j=i+1; j<points.length; j++) {
        if (points[i] < points[j]) {
            const tmp = points[i];
            points[i] = points[j];
            points[j] = tmp;
        }
    }
    console.log(name[k]);
}

console.log(points);
console.log(name);

/** 문제 13 */
const arr2 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
]

for (let i=0; i<arr2.length; i++) {
    for (let j=0; j<arr2[i].length; j++) {
        if (i != j) {
            arr2[i][j] = 0;
        }
    }
}

console.log(arr2);

