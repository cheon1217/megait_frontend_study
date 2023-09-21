/** 문제 2번을 for문으로 */
for (let x = 1; x <= 10; x++) {
    const z = 2 ** x;
    console.log("이진수 %d개는 %d개의 정보를 표시가능", x, z);
}

let bit = 1;
for (let i = 1; i <= 10; i++) {
    bit *= 2;
    console.log("이진수 %d개는 %d개의 정보를 표시가능", i, bit);
}