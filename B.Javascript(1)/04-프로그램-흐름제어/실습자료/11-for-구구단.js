for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= 9; y++){
        const z = x * y;
        console.log("%d X %d = %d", x, y, z);
    }
}

// y가 1부터 10보다 작은 동안 1씩 증가 --> y의 범위 : 1 ~ 9
for (let y = 1; y < 10; y++) {
    const z = y * 7;
    console.log("7 x %d = %d", y, z);
}