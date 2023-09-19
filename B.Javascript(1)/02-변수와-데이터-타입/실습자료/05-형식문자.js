// 기본 데이터 타입
const num = 123.45;
const str = "hello";
const bool = true;

// 추후 살펴보게 될 데이터 타입
const obj = new Date();           // 객체
const arr = [1,2,3];              // 배열 (객체의 일종)
const json = {"a": 123, "b": 234} // JSON (객체의 일종)

/** 1) (중요) 숫자 표현을 위한 문자 : %d */
console.group("숫자값 출력하기")
console.log("숫자값 출력하기=%d", num);    // 정상
console.log("숫자값 출력하기=%d", str);    // 숫자가 아니므로 NaN
console.log("숫자값 출력하기=%d", bool);    // 1 (0은 거짓, 0이외의 모든 수는 참, 일반적으로 1을 참으로 처리)
console.log("숫자값 출력하기=%d", obj);    // 객체에 대한 Hash값 출력
console.log("숫자값 출력하기=%d", arr);    // 숫자가 아니므로 NaN
console.log("숫자값 출력하기=%d", json);    // 숫자가 아니므로 NaN
console.groupEnd();

console.log();

/** 2) (중요) 문자열 표현을 위한 문자 : %s */
console.group("문자열 출력하기");
console.log("문자열 출력하기=%s", num);    // 정상
console.log("문자열 출력하기=%s", str);    // 정상
console.log("문자열 출력하기=%s", bool);   // 정상
console.log("문자열 출력하기=%s", obj);    // 정상
console.log("문자열 출력하기=%s", arr);    // 정상
console.log("문자열 출력하기=%s", json);   // 정상
console.groupEnd();

console.log();

/** 3) 객체 표현을 위한 문자 : %o */
console.group("객체 출력하기")
console.log("객체 출력하기=%o", num)       //정상
console.log("객체 출력하기=%o", str)       //정상 (따옴표가 적용됨)
console.log("객체 출력하기=%o", bool)      //정상
console.log("객체 출력하기=%o", obj)       //정상
console.log("객체 출력하기=%o", arr)       //정상
console.log("객체 출력하기=%o", json)      //정상
console.groupEnd();

console.log();

/** 4) JSON 표현을 위한 문자 : %j */
// '%s'와 결과가 비슷하기 때문에 잘 사용되지 않는다.
console.group("JSON 출력하기")
console.log("JSON 출력하기=%j", num);      //정상
console.log("JSON 출력하기=%j", str);      //정상 (따옴표가 적용됨)
console.log("JSON 출력하기=%j", bool);     //정상
console.log("JSON 출력하기=%j", obj);      //정상
console.log("JSON 출력하기=%j", arr);      //정상
console.log("JSON 출력하기=%j", json);     //정상

console.log();

const student = "자바스크립트학생";
const age = 20;
console.group("복합사용")
console.log("%s님의 나이는 %d세 입니다.", student , age);
console.groupEnd();