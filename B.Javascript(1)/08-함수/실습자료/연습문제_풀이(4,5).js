/** 문제 4 */
function printStar(max, current=1) {
    // 종료조건 --> 현재 행이 max번째까지 도달하면 중단
    if (current > max) {
        return;
    } else {
        // current --> 1, 2, 3, 4, 5
        let star = "";
        for (let i=0; i<current; i++) {
            star += "*";
        }
        console.log(star);
        printStar(max, current+1);
    }
}

printStar(5);

console.log();

/** 문제 5 */
function printRevStar(max, current=1) {
    // 종료조건 --> 현재 행이 max번째까지 도달하면 중단
    if (current > max) {
        return;
    } else {
        // current --> 1, 2, 3, 4, 5
        let star = "";
        for (let i=0; i<max-current+1; i++) {
            star += "*";
        }
        console.log(star);
        printRevStar(max, current+1);
    }
}

printRevStar(5);