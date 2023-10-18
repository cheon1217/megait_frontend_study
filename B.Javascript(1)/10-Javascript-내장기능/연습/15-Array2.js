const arr1 = [10, 20, 30, 40, 50];

for (let i=0; i<arr1.length; i++) {
    if (i == 3) {
        console.log(' ~~~ 반복중단!!!');
        break;
    }
    console.log("%d번째 원소 => %d", i, arr1[i]);
}

console.log("----------------");

const arr2 = [10, 20, 30, 40, 50];

arr2.forEach((v, i) => {
    if (i == 3) {
        console.log(" ~~~ 반복중단!!!");
        return;
    }
    console.log("%d번째 원소 => %d", i, v);
});

console.log("----------------");

const arr3 = [10, 20, 30, 40, 50];

arr3.some((v, i) => {
    if (i == 3) {
        console.log(' ~~~ 반복중단!!!');
        return true;
    }
    console.log("%d번째 원소 => %d", i, v);
});

console.log("----------------");

const arr4 = [10, 20, 30, 40, 50];
const hello = arr4.map(v => v * 10);
console.log(hello);