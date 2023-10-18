/** 
 * 문제 1 
* 자신의 이메일 주소를 email 이라는 변수에 저장하고 @를 기준으로 
* 아이디와 도메인 부분을 분리하여 출력하시오.
*/
let email = "leekh4232@gmail.com";
// console.log(email.indexOf("@"));
console.log(email.substring(0,9));
console.log(email.substring(10));

// 강사님 풀이
email = "helloworld@megait.com";

// 풀이 1
p = email.indexOf("@");
id = email.substring(0, p);
let domain = email.substring(p+1);
console.log(id);
console.log(domain);

// 풀이 2
emailSplit = email.split("@");
// console.log(emailSplit);
console.log(emailSplit[0]);
console.log(emailSplit[1]);