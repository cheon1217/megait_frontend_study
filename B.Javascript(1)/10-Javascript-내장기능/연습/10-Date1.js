/** Date */
const days = ['일', '월', '화', '수', '목', '금', '토'];

/** 객체 생성 */
const date1 = new Date();

// 년, 월, 일, 시간, 분, 초 리턴받기
const yy = date1.getFullYear();   // getFullYear() --> (년) 리턴
// 월: 0 -> 1 , 11 -> 12를 의미
const mm = date1.getMonth() + 1;  // getMonth() --> (월) 리턴
const dd = date1.getDate();       // getDate()  --> (일) 리턴

// 0=일요일~6=토요일의 값 리턴
const i = date1.getDay();
const day = days[i];

const hh = date1.getHours();      // getHours() --> (시간) 리턴
const mi = date1.getMinutes();    // getMinutes() --> (분) 리턴
const ss = date1.getSeconds();    // getSeconds() --> (초) 리턴

let result = yy + "-" + mm + "-" + dd + "-" + day + "요일 " + hh + ":" + mi + ":" + ss;
console.log(result);

/** 날짜를 의미하는 문자열 반환 */
// 날짜 부분만 나타내는, 사람이 읽을 수 있는 문자열을 반환
console.log(date1.toDateString());

// Date를 나타내는 문자열을 ISO 8601 확장 형식에 맞춰 반환
console.log(date1.toISOString());

// 형식 문자열을 사용해서 Date를 나타내는 문자열을 생성
console.log(date1.toLocaleString());
console.log(date1.toLocaleString('de-DE'));
console.log(date1.toLocaleString('kr-KR'));

// Date의 날짜 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString('de-DE'));
console.log(date1.toLocaleDateString('kr-KR'));

// Date의 시간 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환
console.log(date1.toLocaleTimeString());
console.log(date1.toLocaleTimeString('de-DE'));
console.log(date1.toLocaleTimeString('kr-KR'));

/** 특정 날짜를 의미하는 객체 생성 */
// 시작이 없으므로 지정으로 설정
let date2 = new Date(2021, 9, 5);
console.log(date2.toLocaleString('ko-KR'));

// 특정 시점을 의미하는 객체 생성
let date3 = new Date(2021, 9, 5, 21, 19, 31);
console.log(date3.toLocaleString('kr-KR'));

// 이미 생성된 날짜 객체의 성분 변경
date3.setFullYear(2010);
date3.setMonth(1);
date3.setDate(14);
date3.setHours(12);
date3.setMinutes(16);
date3.setSeconds(30);
console.log(date3.toLocaleString('ko-KR'));