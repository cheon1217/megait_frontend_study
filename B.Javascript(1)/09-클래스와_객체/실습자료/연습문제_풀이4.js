class Account {
    #owner;
    #balance;

    constructor(owner, balance) {
        this.#owner = owner;
        this.#balance = balance;
    }

    get owner() {return this.#owner;}
    set owner(owner) { this.#owner = owner; }

    get balance() {return this.#balance;}
    set balance(balance) { this.#balance = balance; }

    disposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.log("잔액이 부족합니다.");
            return 0;
        } 
        this.balance -= amount;
        return amount;
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