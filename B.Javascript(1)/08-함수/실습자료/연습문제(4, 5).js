/** 문제 4 */
// max는 최대 행 수, current는 현재 출력중인 행의 위치
function printStar(max, current=1) {

    if (current > max) {
        return;
    } else {
        let star = "";
        for (let i=0; i<current; i++) {
                star += "*";
            }
        console.log(star);
        printStar(max,current+1);
    }

}

printStar(5);

console.log();

/** 문제 5 */
function printRevStar(max, current=1) {

   if (current > max) {
        return;
   } else {
       let star = "";
        for (let i=0; i<max-current+1; i++) {
            star += "*";
        }
        console.log(star);
        printRevStar(max,current+1);
   }

}

printRevStar(5);