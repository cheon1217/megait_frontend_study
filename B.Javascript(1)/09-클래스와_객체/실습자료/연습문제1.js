/** 문제 1 */
class Student {
    name;
    Korean;
    English;
    Math;

    constructor(name, Korean, English, Math) {
        this.name = name;
        this.Korean = Korean;
        this.English = English;
        this.Math = Math;
    }

    sum() {
        return this.Korean + this.English + this.Math;
    }

    avg() {
        return (this.Korean + this.English + this.Math) / 3;
    }

}

const std1 = new Student("철수", 92, 81, 77);
const std2 = new Student("영희", 72, 95, 98);
const std3 = new Student("민혁", 80, 86, 84);

console.log(std1.name + "의 총점은 " + std1.sum() + "점 이고, 평균은 " + std1.avg() + "점 입니다.");
console.log(std2.name + "의 총점은 " + std2.sum() + "점 이고, 평균은 " + std2.avg() + "점 입니다.");
console.log(std3.name + "의 총점은 " + std3.sum() + "점 이고, 평균은 " + std3.avg() + "점 입니다.");