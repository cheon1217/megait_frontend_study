class Protoss {
    #name;
    #hp;
    #dps;

    /** 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의 */
    constructor(name, hp, dps) {
        this.#name = name;
        this.#hp = hp;
        this.#dps = dps;
        console.log("[%s] 체력: %d, 공격력: %d", this.#name, this.#hp, this.#dps);
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get hp() {
        return this.#hp;
    }

    set hp(value) {
        this.#hp = value;
    }

    get dps() {
        return this.#dps;
    }

    set dps(value) {
        this.#dps = value;
    }

    /** 객체가 수행해야 하는 동작들을 함수 형태로 정의 */
    move(position) {
        console.log(this.name + "(이)가 " + position + "까지 이동합니다.");
    }

    attack(target) {
        console.log(this.name + "(이)가 " + target + "(을)를 공격합니다. 데미지: " + this.dps);
    }
}

class Zealot extends Protoss {
    sword(target) {
        this.attack(target);
        console.log(" >>>>>>> 검으로 찌르기");
    }
}

class Dragon extends Protoss {
    fire(target) {
        this.attack(target);
        console.log(" >>>>>>> 원거리 공격");
    }
}

var z1 = new Zealot("질럿1", 300, 20);
z1.move("본진");
z1.sword("본진");

var z2 = new Zealot("질럿2", 300, 25);
z1.move("멀티");
z1.sword("멀티");

var d1 = new Dragon("드라군1", 250, 40);
d1.move("본진");
d1.fire("본진");

var d2 = new Dragon("드라군2", 200, 35);
d1.move("멀티");
d1.fire("멀티");