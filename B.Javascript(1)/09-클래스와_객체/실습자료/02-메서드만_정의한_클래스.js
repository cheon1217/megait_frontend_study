// 메서드만 정의하는 클래스는 비슷한 성격을 갖는 함수들을
// 그룹화 해 놓은 개념으로 이해할 수 있다.
class Calc {
    plus(x, y) {
        return x + y;
    }

    minus(x, y) {
        return x - y;
    }
}

const c = new Calc();
console.log(c);
console.log(c.plus(1, 2));
console.log(c.minus(10, 5));