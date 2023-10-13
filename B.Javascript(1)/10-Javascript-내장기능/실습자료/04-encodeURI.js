/** 
 * encodeURI(string)
 * 
 * 주어진 문자열을 URL에 포함시키기에 적정한 형태로 변환(=인코딩)하는 처리
 * 인코딩하지 않는 문자.
 *    A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #

https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=자바스크립트

[잘못된 경우]
<a href="result.html?a=100&b=200&name=자바스크립트">click</a>

[올바른 경우]
<a href="result.html?a=100&b=200&name=자바스크립트">click</a>

*/

const set1 = ';,/?:@&=+$#'; // 예약 문자
const set2 = "-_.!~'()";
const set3 = '';
const set4 = '';