/** 문제 1 */
for (let i = 10; i > 0; i--) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

/** 문제 2 */
let a = 10;

while (true) {

    a--;

    if (a % 2 == 0) {
        continue;
    }

    if (a < 0) {
        break;
    }

    console.log(a);

}

/** 문제 3 */
let sum = 0;

for (let i = 1; i < 20; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        sum += i;

        console.log("2 또는 3의 배수 : " + i)
    }
}

console.log("2 또는 3의 배수인 수의 총 합 : " + sum);

/** 문제 4 */
let cnt = 0;

for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
        if (i + j == 6) {
            cnt++;
            console.log("[%d, %d]", i, j);
        }
    }
}

console.log("경우의 수는 %d개 입니다.", cnt);

/** 문제 5 */
for (let i = 0; i < 4; i++) {

    let a = "";

    for (let j = i; j < i + 4; j++) {
        a += j;

        a += " ";
    }

    console.log(a);

}

for (let i = 0; i < 4; i++) {

    let str = "";

    for (let j = 0; j < 4; j++){
        str += i + j;

        if (j+1 < 4) {
            str += " ";
        }
    }

    console.log(str);
}

/** 문제 6 */
for (let i = 1; i <= 7; i++) {

    let b = "";

    for (let j = 1; j <= i; j++) {
        b += j;
    }

    console.log(b);

}

/** 문제 7 */
let num = 1;
for (let i = 2; i < 10; i++) {

    if (num == 1) {
        if (i % 2 == 1) {
            for (let j = 1; j < 10; j++) {
                console.log("%d X %d = %d", i, j, i*j);
            }
        }
    }

    if (num == 2) {
        if (i % 2 == 0) {
            for (let j = 1; j < 10; j++) {
                console.log("%d X %d = %d", i, j, i*j);
            }
        }
    }
    console.log();

}
