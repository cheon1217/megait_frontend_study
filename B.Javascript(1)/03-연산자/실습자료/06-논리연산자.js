/** 1) and */
// --> 전체가 참인 경우만 결과가 참.
console.group("1) and");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.groupEnd();

/** 2) and연산 여러 개 사용 */
console.group("2) and연산 여러 개 사용");
console.log(true && true && true);
console.log(true && true && false);
console.log(false && false && true);
console.log(false && true && true);
console.groupEnd();

/** 3) or */
// --> 하나라도 참이 포함되어 있다면 결과는 참
console.group("3) or");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.groupEnd();

/** 5) 복합사용 */
console.group("5) 복합사용")
// AND가 OR보다 항상 우선한다.
// t || t -> t
console.log(true && true || true);