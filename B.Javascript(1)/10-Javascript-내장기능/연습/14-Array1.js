const data = [10, 20, 30, 40, 50];

// push()
data.push(60, 70);
console.log(data);

// pop()
const k = data.pop();
console.log(k);
console.log(data);

// shift()
const x = data.shift();
console.log(x);
console.log(data);

// unshift()
data.unshift(0, 10);
console.log(data);

// slice()
const z = data.splice(2, 3);
console.log(z);
console.log(data);

data.splice(0, 2, 'a', 'b', 'c');
console.log(data);

data.splice(3, 0, 'd', 'e');
console.log(data);

const a = [1, 2];
const b = [3, 4, 5];
const c = [6, 7, 8, 9];
const d = a.concat(b, c);
console.log(d);

console.log();

let arr1 = [1, 0, false];

console.log(arr1.indexOf(0));
console.log(arr1.indexOf(false));
console.log(arr1.indexOf(null));

console.log(arr1.includes(1));
console.log(arr1.includes(100));

const arr2 = [NaN];
console.log(arr2.indexOf(NaN));
console.log(arr2.includes(NaN));