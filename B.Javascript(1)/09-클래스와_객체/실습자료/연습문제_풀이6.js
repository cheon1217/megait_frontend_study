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

    shift() {
        const first = this.#data[0];
        
        // 임시변수를 data의 길이보다 1작은 크기로 초기화
        const temp = new Array(this.#size-1);
        for (let i=1; i<this.#size; i++) {
            temp[i-1] = this.#data[i];
        }
    
        this.#data = [...temp];
    
        this.#size--;
    
        return first;
    }
    
    unshift(item) {
        const temp = [...this.#data];
        this.#data = [item, ...temp];
        this.#size++;
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

const a = list.shift();
console.log('추출된 데이터: %d', a);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.unshift(700);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.unshift(800);
list.unshift(900);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);