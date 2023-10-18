/** 
 * 문제 2
 * 임의의 주민번호를 다음과 같이 *을 포함하여 변수에 저장하시오
 */
let ssn = '020517-3******';
const currentYear = 2023;

// 생년월일
// console.log(ssn.indexOf("-"));
const birth_Date = ssn.substring(0,6);
// console.log(birth_Date);
const year = 20 + ssn.substring(0,2);
const month = ssn.charAt(3);
const day = ssn.substring(4,6);

// 나이
const age = currentYear - parseInt((20 + ssn.substring(0,2))) + 1;
// console.log(age);
// console.log(20 + ssn.substring(0,2));

// 성별
// console.log(ssn.indexOf("3"));
let gender = "";
if (ssn.charAt(7) == 1 || ssn.charAt(7) == 3) {
    gender = "남자";
    // console.log(gender);
} else if (ssn.charAt(7) == 2 || ssn.charAt(7) == 4) {
    gender = "여자";
    // console.log(gender);
}

console.log(`${year}년 ${month}월 ${day}일에 태어난 ${age}세 ${gender} 입니다.`);

// 강사님 풀이
ssn = '020517-3******';

const date = new Date();
const nowYear = date.getFullYear();

let yy = ssn.substring(0, 2);
let mm = ssn.substring(2, 4);
let dd = ssn.substring(4, 6);
let gen = ssn.substring(7, 8);

console.log("%s, %s, %s, %s", yy, mm, dd, gen);

// if(parseInt(gen) > 2) {
//     yy = parseInt(yy) + 2000;
// } else {
//     yy = parseInt(yy) + 1900;
// }

yy = parseInt(gen) > 2 ? parseInt(yy) + 2000 : parseInt(yy) + 1900;
console.log(yy);
console.log(typeof yy);

// 나이계산
const old = nowYear - yy + 1;

// 성별 확인
const sex = parseInt(gen) % 2 ? "남자" : "여자";

console.log(`${yy}년 ${mm}월 ${dd}일에 태어난 ${old}세 ${sex} 입니다.`);