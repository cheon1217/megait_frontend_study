// 에약 setTimeout()
function foo() {
    for (let i=1; i<10; i++) {
        console.log("2 X " + i + " = " + (i*2));
    }
}

setTimeout(foo, 3000);
console.log("구구단을 외자!");

setTimeout(() => {
    console.log("다음 구구단 기다리는 중...");
}, 5000);

// 일반적으로 콜백함수를 별도로 정의하지 않고 즉시 전달한다.
setTimeout(() => {
    for (let i=1; i<10; i++) {
        console.log("3 X " + i + " = " + (i*3));
    }
}, 15000);