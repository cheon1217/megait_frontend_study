/** Math */
// (1) Math.max() --> 주어진 값 중에서 최대값 (파라미터 수 제한 없음)
let max = Math.max(100, 123, 456, 789, 1000);
console.log("최대값 : " + max);

// (2) Math.min() --> 주어진 값 중에서 최소값 (파라미터 수 제한 없음)
let min = Math.min(100, 123);
console.log("최소값 : " + min);

// (3) Math.round() --> 소수점 반올림
let num1 = 3.7146;
console.log("소수점 반올림 : " + Math.round(num1));

//(4) Math.ceil() --> 소수점 올림  Math.floor() --> 소수점 내림
console.log("소수점 올림 : " + Math.ceil(num1));
console.log("소수점 내림 : " + Math.floor(num1));

// (5) Math.abs() --> 절대값 반환
let num2 = -123;
console.log("절대값 : " + Math.abs(num2));

// (6) Math.random() --> 0~1 범위의 난수 발생
console.log("난수 : " + Math.random());

// 두 수 사이의 난수를 리턴하는 함수
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// 함수 결과 확인
let rnd = random(0, 9);
console.log("0~9 사이의 난수 : " + rnd);

// 함수의 응용 >> 5자리의 인증번호 생성
let auth = "";
for (var i=0; i<5; i++) {
    auth += random(0,9);
}
console.log("인증번호 : " + auth);