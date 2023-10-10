/** 문제 4 */
// max는 최대 행 수, current는 현재 출력중인 행의 위치
function printStar(max, current=1) {

    if (current > (max+1)) {
        return;
    } else {
        for (let i=current; i<=max; i++) {
            let star = "";
            for (let j=current; j<=i; j++) {
                star += "*";
            }
            console.log(star);
        }
    }

}

printStar(5);

/** 문제 5 */
function printRevStar(max, current=1) {

   if (current > (max+1)) {
        return;
   } else {
        for (let i=current; i<=max; i++) {
            let star = "";
            for (let j=current; j<=max-i+1; j++) {
                star += "*";
            }
            console.log(star);
        }
   }

}

printRevStar(5);