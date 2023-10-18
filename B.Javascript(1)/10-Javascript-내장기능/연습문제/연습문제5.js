function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// 1~45 사이의 범위에서 1씩 증가하는 원소가 저장되어 있는 배열
const balls = new Array(45);
for (let i=0; i<balls.length; i++) {
    balls[i] = i+1;
}

// 6개의 빈 칸을 갖는 배열
const lotto = new Array(6);
for (let i=0; i<lotto.length; i++) {
    // balls에서 공으 ㄹ꺼낼 위치
    const rnd = random(0, balls.length-1);

    // rnd 위치의 공을 꺼내서 lotto 배열에 복사
    lotto[i] = balls[rnd];

    // rnd 위치에서 하나의 데이터를 잘라냄
    balls.splice(rnd, 1);
}

console.log(lotto);