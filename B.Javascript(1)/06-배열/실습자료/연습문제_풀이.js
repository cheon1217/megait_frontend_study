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
// 상품가격 배열
const price2 = [209000, 109000, 119000, 109000, 94000];

// 낮은 가격순 정렬
// (공식) 부모 반복문 --> i가 0부터 길이-1보다 작은 동안
//        자식 반복문 --> j가 i+1부터 길이보다 작은 동안
//        i번째와 j번째의 크기를 비교하여 맞교환 처리 수행
for (let i=0; i<price2.length-1; i++) {
    for (let j=i+1; j<price2.length; j++) {
        if (price2[i] > price2[j]) {
            const tmp = price2[i];
            price2[i] = price2[j];
            price2[j] = tmp;
        }
    }
}

console.log(price2);

/** 문제 8 */
// 원본 배열
const arr = [5, 3, 2, 8, 9];
console.log('before --> ' + arr);

// 역순 배치 공식
// 1) 짝수일 경우 : '배열길이/2' 만큼 반복
//    홀수일 경우 : '(배열길이-1)/2' 만큼 반복
// 2) i번째와 '길이-i-1'번째를 맞교환
for (let i=0; i<(arr.length-1)/2; i++) {
    const p = arr.length - i - 1;
    const tmp = arr[i];
    arr[i] = arr[p];
    arr[p] = tmp;
}

console.log('after --> ' + arr);

/** 문제 9 */
// 학생 이름 배열
const student = ["둘리", "도우너", "또치", "희동"];

// 성적표 배열
const grade2 = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];

// 10번 문제를 위한 학생 평균의 총합
let class_sum = 0;

// i는 학생 한명
for (let i=0; i<grade2.length; i++) {
    // 학생별 총점
    let sum2 = 0;
    for (let j=0; j<grade2[i].length; j++) {
        sum2 += grade2[i][j];
    }

    let avg = sum2 / grade2[i].length;

    //console.log(student[i] + "총점: " + sum2 + "점, 평균: " + avg + "점");
    console.log(`${student[i]}  총점: ${sum2}점, 평균: ${avg}점`);

    // 10번 문제 --> 학생별 평균의 총 합
    class_sum += avg;

}

// 10번 문제 --> 반 평균 --> 학생별 평균 / 학생수
let class_avg = class_sum / student.length;

console.log(`학생 평균의 총합: ${class_sum}점, 반 평균: ${class_avg}점`)

/** 문제 11 */
const inven = [
    [500, 291], [320, 586], [100, 460], [120, 558], [92, 18], [30, 72]
];

let total_price = 0;

for (let i=0; i<inven.length; i++) {
    total_price += (inven[i][0]*0.9)*inven[i][1];
}

console.log("아이템 총 판매 가격: " + total_price + "G");

/** 문제 12 */
const names = ["재석", "민영", "종민", "광수", "승기", "새정"];
const points = [82, 91, 54, 62, 88, 90];

for (let i=0; i<points.length-1; i++) {
    for (let j=i+1; j<points.length; j++) {
        if (points[i] < points[j]) {
            const p = points[i];
            points[i] = points[j];
            points[j] = p;

            const n = names[i];
            names[i] = names[j];
            names[j] = n;
        }
    }
}

console.log(names);

/** 문제 13 */
const matrix = new Array(5);

for (let i=0; i<matrix.length; i++) {
    matrix[i] = new Array(5);
}

for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++) {
        // if (i == j) {
        //     matrix[i][j] = 1;
        // } else {
        //     matrix[i][j] = 0;
        // }

        matrix[i][j] = i == j ? 1 : 0;
    }
}

console.log(matrix);

/** 문제 14 */
const cs = [1, 5, 7, 'J', 'Q', 'A'];
const yh = [2, 3, 4, 5, 'Q', 'K', 'A'];

/** case (1) - 철수의 카드를 먼저 탐색하는 경우 */
// 가져올 수 있는 카드 수 탐색
let count1 = 0;

for (let i=0; i<cs.length; i++) {
    for (let j=0; j<yh.length; j++) {
        if (cs[i] == yh[j]) {
            count1++;
        }
    }
}

console.log(`가져올 수 있는 카드 수 : ${count1}장`);

for (let i=0; i<cs.length; i++) {
    for (let j=0; j<yh.length; j++) {
        if (cs[i] == yh[j]) {
            console.log(`${i}번째 >> ${cs[i]}`);
        }
    }
}

console.log();

/** case (2) - 영희의 카드를 먼저 탐색하는 경우 */
// 가져올 수 있는 카드 수 탐색
let count2 = 0;
let loop = 0;

for (let i=0; i<yh.length; i++) {
    for (let j=0; j<cs.length; j++) {
        console.log(`${++loop}`);
        if (yh[i] == cs[j]) {
            count2++;
        }
    }
}

console.log(`가져올 수 있는 카드의 수 : ${count2}장`);

for (let i=0; i<yh.length; i++) {
    for (let j=0; j<cs.length; j++) {
        console.log(`${++loop}`);
        if (yh[i] == cs[j]) {
            console.log(`${j}번째 >> ${cs[j]}`);
        }
    }
}

console.log();

/** case (3) */
// 철수의 카드 수와 동일한 길이의 빈 배열
const target = new Array(cs.length);
console.log(target);

let count3 = 0;
let loop2 = 0;

for (let i=0; i<cs.length; i++) {
    for (let j=0; j<yh.length; j++) {
        console.log(`${++loop2}`);
        if (cs[i] == yh[j]) {
            count3++;
            target[i] = cs[i];
            break;
        }
    }
}

console.log(`가져올 수 있는 카드의 수 : ${count3}장`);
console.log(target);

for (let i=0; i<target.length; i++) {
    console.log(`${++loop2}`);
    if (target[i] != undefined) {
        console.log(`${i}번째 >> ${target[i]}`);
    }
}