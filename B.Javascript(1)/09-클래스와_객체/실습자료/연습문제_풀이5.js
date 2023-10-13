class MyList {
    #data;
    #size;

    constructor() {
        this.#data = [];
        this.#size = 0;
    }

    get data() {
        return this.#data;
    }

    get size() {
        return this.#size;
    }

    push(item) {
        this.#data[this.#size] = item;
        this.#size++;
    }

    pop() {
        const last = this.#data[this.#size-1];
        const temp = [...this.#data];

        this.#data = [];

        for (let i=0; i<temp.length-1; i++) {
            this.#data[i] = temp[i];
        }

        this.#size--;

        return last;
    }
}

const list = new MyList();

list.push(100);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);
list.push(200);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);
list.push(300);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const x = list.pop();
console.log('추출된 데이터: %d', x);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(400);
list.push(500);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const y = list.pop();
console.log('추출된 데이터: %d', y);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(600);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const z = list.pop();
console.log('추출된 데이터: %d', z);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

