/** 문제 3 */
class Student {
    #departmentName;
    #departmentNumber;

    constructor(departmentName, departmentNumber) {
        this.#departmentName = departmentName;
        this.#departmentNumber = departmentNumber;
    }

    get departmentName() {return this.#departmentName;}
    set departmentName(dname) {this.#departmentName = dname;}

    get departmentNumber() {return this.#departmentNumber;}
    set departmentNumber(dnum) {this.#departmentNumber = dnum;}

    sayHello() {
        console.log(`나는 ${this.departmentName}학과 ${this.departmentNumber}학번 입니다.`);
    }
}

const stud = new Student("컴퓨터", 202004123);
stud.sayHello();