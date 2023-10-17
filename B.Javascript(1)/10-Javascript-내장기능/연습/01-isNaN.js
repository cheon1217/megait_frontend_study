console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({a:10, b:20}));
console.log(isNaN([10, 20, 30]));
console.log(isNaN('blabla'));
console.log(isNaN('123ABC'));

console.log();

console.log(isNaN(true));
console.log(isNaN(null));
console.log(isNaN(37));
console.log(isNaN('37'));
console.log(isNaN('37.37'));
console.log(isNaN(''));
console.log(isNaN(' '));