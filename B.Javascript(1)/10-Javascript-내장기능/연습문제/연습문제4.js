function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

const lotto = [];
for (let i=0; i<6; i++) {
    console.group("%d번째 원소 결정하기", i);
    console.log("%s", lotto);
    while (true) {
        const rnd = random(1, 45);

        // 생성된 랜덤값이 lotto 배열에 포함되어 있지 않다면?
        if (!lotto.includes(rnd)) {
            console.log(" >>> %d는 중복되지 않음", rnd)
            lotto.push(rnd);
            break;
        } else {
            console.log(" >>> %d는 중복됨", rnd);
        }
    }
    console.groupEnd();
}

console.log(lotto);