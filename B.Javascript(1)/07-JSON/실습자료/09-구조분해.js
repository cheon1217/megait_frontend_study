/** 1) JSON에 대한 구조분해 (=비구조 할당) */
const object = {a: 1, b: 2, c: 3};

// 각 원소를 변수로 추출
// const x = object.a;
// const y = object.b;
// console.log(x);
// console.log(y);

// JSON(혹은 개체)에서 필요한 값만 추출하여 새로운 상수로 만들어 줌
// --> object에는 {}안에 명시된 항목만 동일한 key를 갖는 데이터가 존재해야 함
const {a, b, c} = object;

console.log(a);
console.log(b);
console.log(c);

// 배열에 대한 비구조 문법
const arr = [100, 200];

// 순서대로 원소를 분리함.
// 변수 이름은 개발자가 정할 수 있음
const [x, y] = arr;
console.log(x); // 100
console.log(y); // 200