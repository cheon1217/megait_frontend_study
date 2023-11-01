/**
 * 클래스가 독립적인 멤버변수가 없고
 * 단순히 비슷한 용도의 함수를 그룹으로 묶기 위한 목적으로 작성된 경우
 * 객체를 불필요하게 많이 생성하는 것을 방지하기 위한 코드 작성 패턴
 */
const __TIMESTAMP__ = new Date().getTime();

class Singleton {
    static #current = null;

    static getInstance() {
        if (Singleton.#current === null) {
            Singleton.#current = new Singleton(__TIMESTAMP__);
        }

        return Singleton.#current;
    }

    constructor(stamp) {
        if (stamp !== __TIMESTAMP__) {
            throw new Error("싱클톤 클래스는 getInstance()를 통해서만 객체 생성이 가능합니다.");
        }
        console.log("Singleton 클래스의 객체가 생성되었습니다.");
    }

    kor() {
        return "안녕하세요 자바스크립트";
    };

    eng() {
        return "Hello Javascript";
    };
}

const my = Singleton.getInstance();