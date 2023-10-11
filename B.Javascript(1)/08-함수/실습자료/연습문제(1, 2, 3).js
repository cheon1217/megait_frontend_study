/** 문제 1 */
// max는 출력해야 할 최대 라인 수
function printStar(max) {
    for (let i=0; i<max; i++) {

        let star = "";

        for (let j=0; j<i+1; j++) {

            star += "*";

        }

        console.log(star);
    }
}

printStar(5);

console.log();

/** 문제 2 */
function printRevStar(max) {
    for (let i=0; i<max; i++) {

        let star = "";

        for (let j=0; j<max-i; j++) {
            star += "*";
        }

        console.log(star);

    }
}

printRevStar(5);

/** 문제 3 틀림 */
// function myGame(n) {
    
//     for (let i=1; i<=n; i++) {

//         const location10 = (i - (i % 10)) / 10;;
//         const location1 = i % 10;
        
//         if (location10 == 3 || location10 == 6 || location10 == 9) {
//             if (location1 == 3 || location1 == 6 || location1 == 9) {
//                 console.log("짝짝(" + i + ") --> 2번");
//             } else {
//                 console.log("짝(" + i + ") --> 1번");
//             }
//         } else {
//             if (location1 == 3 || location1 == 6 || location1 == 9) {
//                 console.log("짝(" + i + ") --> 1번");
//             } else {
//                 console.log(i);
//             }
//         }

//     }

// }

/** 문제 3 복습 */
function myGame(n) {

    let count = 0;

    for (let i=1; i<=n; i++) {

        const str = i + "";

        let say = "";

        let clap = 0;

        for (let s of str) {
            if (s == "3" || s == "6" || s == "9") {
                say += "짝";
                clap++;
            }
        }

        if (clap == 0) {
            console.log(i);
        } else {
            console.log(`${say} (${i}) --> ${clap}`);
            count += clap;
        }

    }

    return count;

}

console.log("박수를 총 %d번 쳤습니다.", myGame(35));