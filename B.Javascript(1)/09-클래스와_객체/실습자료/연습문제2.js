/** 문제 2 */
class Rectangle {

    #width;
    #height;

    set width(value) {
        this.#width = value;
    }

    get width() {
        return this.#width;
    }

    set height(value) {
        this.#height = value;
    }

    get height() {
        return this.#height;
    }

    getAround() {
        return (this.height*2) + (this.width*2);
    }

    getArea() {
        return (this.width*this.height);
    }

}

const rec1 = new Rectangle();
rec1.width = 10;
rec1.height = 5;
console.log("둘레의 길이는 " + rec1.getAround() + "이고, 넓이는 " + rec1.getArea() + "입니다.");