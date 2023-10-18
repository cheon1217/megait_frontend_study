function foo(id, pw) {
    if (!id) {
        throw new Error("아이디를 입력하세요.");
    }

    if (!pw) {
        throw new Error("비밀번호를 입력하세요.");
    }

    return "로그인 되었습니다.";
}

const a = null;
const b = null;

try {
    a = foo("", "1234");
} catch (err) {
    // 이 블록으로 전달되는 err객체는 5라인에서 생성한 Error 클래스의 객체이다.
    console.log("에러 이름: %s", err.name);
    console.log("에러 내용: %s", err.message);
}

try {
    b = foo("hello", "");
} catch (err) {
    // 이 블록으로 전달되는 err객체는 5라인에서 생성한 Error 클래스의 객체이다.
    console.log("에러 이름: %s", err.name);
    console.log("에러 내용: %s", err.message);
}

console.log(a);
console.log(b);