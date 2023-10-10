/** 문제 1 */
function printStar(max) {
    // 행을 담당하는 반복문
    for (let i=0; i<max; i++) {
        // 한 줄에 출력할 내용
        let str = "";

        // 열을 담당하는 반복문
        for (let j=0; j<i+1; j++) {
            str += "*";
        }

        console.log(str);
    }
}

printStar(5);

/** 문제 2 */
function printRevStar(max) {
    for (let i=0; i<max; i++) {
        let str = "";
        for (let j=0; j<max-i; j++) {
            str += "*";
        }
        console.log(str);
    }
}

printRevStar(5);

/** 문제 3 */
function myGame(n) {
    // 박수를 총 몇번 쳤는지에 대한 합계 값
    let count = 0;

    for (let i=1; i<=n; i++) {
        //console.group(i);

        // 현재 숫자 (i)를 문자열로 변환함. 33 --> "33"
        const str = i + "";

        // 이번 턴에 출력할 문자열 (숫자인지 박수인지...)
        let say = "";

        // 이번 턴에 박수를 몇 번 치는가?
        let clap = 0;

        for (let s of str) {
            //console.log(s);

            if (s == "3" || s == "6" || s == "9") {
                // 박수
                say += "짝";
                clap++;
            }
        }

        // 박수를 친 적이 없다면
        if (clap == 0) {
            console.log(i);
        } else {
            console.log(`${say} (${i}) --> ${clap}`);
            count += clap;
        }
        
        //console.groupEnd();
    }

    return count;
}

console.log("박수를 총 %d번 쳤습니다.", myGame(35));