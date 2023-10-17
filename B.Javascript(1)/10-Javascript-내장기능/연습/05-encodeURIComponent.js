const set1 = ';,/?:@&=+$#;' // 예약 문자
const set2 = "-_.!~'()";    // 비예약 문자
const set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
const set4 = '자바스크립트';

const enc1 = encodeURIComponent(set1);
const enc2 = encodeURIComponent(set2);
const enc3 = encodeURIComponent(set3);
const enc4 = encodeURIComponent(set4);

console.group("encodeURIComponent");
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

console.log();

// decodeURIComponent
console.group("decodeURIComponent");
console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));
console.groupEnd();