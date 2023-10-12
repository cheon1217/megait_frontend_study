class MyList {
    #data;
    #size;

    constructor(data, size) {
        this.#data = data;
        
        this.#size = size;
        
    }

    get data() {
        return this.#data;
    }

    get size() {
        return this.#size;
    }

    push(item) {
        
        size++;
    }

    pop() {
        return data[0];
    }
}

const list = new MyList();

list.push(100);
list.push(200);
list.push(300);
console.log("원소의 수: %d, 데이터 확인: %s", list.size, list.data);