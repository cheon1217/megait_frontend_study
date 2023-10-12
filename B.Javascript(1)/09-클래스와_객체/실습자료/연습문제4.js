class Account {
    #owner;
    #balance;

    constructor(owner, balance) {
        this.#owner = owner;
        this.#balance = balance;
    }

    set owner(value) {
        this.#owner = value;
    }

    get owner() {
        return this.#owner;
    }

    set balance(value) {
        this.#balance = value;
    }

    get balance() {
        return this.#balance;
    }

    disposit(amount) {
        return this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.log("잔액이 부족합니다.");
        } else {
            return this.balance -= amount;
        }
    }

}

const acc = new Account("Hello", 15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

acc.disposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

acc.disposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);