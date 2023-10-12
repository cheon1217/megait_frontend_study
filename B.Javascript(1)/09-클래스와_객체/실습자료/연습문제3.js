class Student {

    #department;
    #grade;

    constructor(department, grade) {
        this.#department = department;
        this.#grade = grade;
    }

    set department(value) {
        this.#department = value;
    }

    get department() {
        return this.#department;
    }

    set grade(value) {
        this.#grade = value;
    }

    get grade() {
        return this.#grade;
    }

    sayHello() {
        console.log(`나는 ${this.#department}학과 ${this.#grade}학번 입니다.`)
    }

}

const stud = new Student("컴퓨터", 202004123);
stud.sayHello();