/** 문제 1 */

// 풀이(1)
for (let i=9; i>-1; i--) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// 풀이(2)
for (let i=9; i>-1; i-=2) {
    console.log(i);
}

// 풀이(3)
for (let i=0; i<10; i++) {
    if ( (9-i) % 2 == 1) {
        console.log(9-i);
    }
}

// 풀이(4)
for (let i=0; i<10; i+=2) {
    console.log(9-i);
}




/** 문제 2 */

// 풀이(1)
let i=9;
while (i>-1) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i--;
}

// 풀이(2)
let i2=9;
while (i2>-1) {
    console.log(i2);
    i2-=2;
}

// 풀이(3)
let i3=0;
while (i3<10) {
    if ( (9-i3) % 2 == 1) {
        console.log(9-i3);
    }
    i3++;
}

// 풀이(4)
let i4=0;
while (i4<10) {
    console.log(9-i4);
    i4+=2;
}


/** 문제 3 */
let sum = 0;

for (let i=1; i<20; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        sum += i;
    }
}

console.log(sum);


/** 문제 4 */

// 갯수를 셀 경우 0으로 초기화 된 변수가 필요하다.
let count = 0;

// 첫 번째 주사위의 반복
for (let i=1; i<7; i++) {
    // 두 번째 주사위의 반복
    for (let j=1; j<7; j++) {
        if (i + j == 6) {
            console.log("[%d, %d]", i, j);
            // 조건이 충족될때 마다 1씩 증가 --> 갯수 세기
            count++;
        }
    }
}

console.log("경우의 수는 %d개 입니다.", count);

/** 문제 5 */
for (let i=0; i<4; i++) {
    // 한 줄에 출력할 문자열 변수
    let str = "";

    for (let j=0; j<4; j++) {
        str += i+j;

        if (j+1 < 4) {
            str += " ";
        }
    }

    console.log(str);
}

/** 문제 6 */
for (let i=0; i<7; i++) {
    let str = "";
    for (let j=0; j<i+1; j++) {
        str += j+1;
    }

    console.log(str);
}