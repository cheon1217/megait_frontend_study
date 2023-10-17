const set1 = ';,/?:@&=+$#'; // 예약 문자
const set2 = "-_.!~'()";    // 비예약 문자
const set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
const set4 = '자바스크립트';

const enc1 = encodeURI(set1);
const enc2 = encodeURI(set2);
const enc3 = encodeURI(set3);
const enc4 = encodeURI(set4);

console.group("encodeURI");
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

console.log();

// decodeURI
console.group("decodeURI");
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
console.groupEnd();