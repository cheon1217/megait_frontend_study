// setInterval(func, int)
// let count1 = 0;

// const timerId1 = setInterval(() => {
//     count1++;
//     for (let i=1; i<10; i++) {
//         console.log(count1 + " X " + i + " = " + (i*count1));
//     }

//     if (count1 == 9) {
//         console.log("타이머1 종료");
//         clearInterval(timerId1);
//     }
// }, 2500);

// console.log("타이머1 시작");

let count2 = 0;

const timerId2 = setInterval(() => {
    count2++;
    console.log("[타이머2] " + count2 + "번째 자동 실행");

    if (count2 == 10) {
        console.log("타이머2 종료");
        clearInterval(timerId2);
    }
}, 1000);

console.log("타이머2 시작");