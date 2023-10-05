/** 문제 1 */
const blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (const k of blood) {
    // console.log(k);
    result[k]++;
}

console.log(result);

/** 문제 2 */
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};

// 문제 2-1
for (const key in exam) {

    let sum = 0;
    for (let i=0; i<exam[key].length; i++) {
        sum += exam[key][i];
    }

    let avg = sum / exam[key].length;

    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", key, sum, avg);

}

// 문제 2-2
let total = 0;

// JSON은 길이를 알 수 없기 때문에 JSON의 원소 하나를 반복문으로 스캔할 때 마다
// count 변수를 1씩 증가하여 전체 학생 수를 알아야한다.
let student_count = 0;

for (const key in exam) {
    total += exam[key][2];

    // 몇 번째 학생인지 카운트
    student_count++;
}

let avg = total / student_count;

console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", total, avg);



/** 문제 3 */
const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299}
];

// 문제 3-1
let c19_sum = 0;

for (const c of covid19) {
    c19_sum += c.active;
}

console.log("누적 확진자 수 : %d", c19_sum);
console.log("평균 확진자 수 : %d", c19_sum / covid19.length);

/** 문제 3-2 */
let max = covid19[0];

for (let i=1; i<covid19.length; i++) {
    if (max.active < covid19[i].active) {
        max = covid19[i];
        console.log(max);
    }
}
console.log("확진자가 가장 많이 나타난 날: %s", max.date);