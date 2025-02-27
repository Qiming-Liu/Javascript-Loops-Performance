function testLoopsPerformance() {
    const arr = Array.from({ length: 10_000_000 }, (_, i) => i); // Create an array with 10 million elements
    let sum = 0; // Variable to store the sum to avoid compiler optimizations
    let start;

    console.log("Testing loop performance with 10,000,000 elements...\n");

    // 1. Traditional for loop
    sum = 0;
    start = performance.now();
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`for loop: ${(performance.now() - start).toFixed(2)} ms`);

    // 2. for...in loop (not recommended for arrays)
    sum = 0;
    start = performance.now();
    for (let i in arr) {
        sum += arr[i];
    }
    console.log(`for...in: ${(performance.now() - start).toFixed(2)} ms`);

    // 3. for...of loop
    sum = 0;
    start = performance.now();
    for (let value of arr) {
        sum += value;
    }
    console.log(`for...of: ${(performance.now() - start).toFixed(2)} ms`);

    // 4. forEach loop
    sum = 0;
    start = performance.now();
    arr.forEach(value => {
        sum += value;
    });
    console.log(`forEach: ${(performance.now() - start).toFixed(2)} ms`);

    // 5. while loop
    sum = 0;
    start = performance.now();
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    console.log(`while loop: ${(performance.now() - start).toFixed(2)} ms`);

    // 6. do...while loop
    sum = 0;
    start = performance.now();
    i = 0;
    do {
        sum += arr[i];
        i++;
    } while (i < arr.length);
    console.log(`do...while loop: ${(performance.now() - start).toFixed(2)} ms`);

    // 7. map (not used for summing but useful for transformations)
    start = performance.now();
    arr.map(value => value * 2);
    console.log(`map: ${(performance.now() - start).toFixed(2)} ms`);

    // 8. filter (used for filtering elements)
    start = performance.now();
    arr.filter(value => value % 2 === 0);
    console.log(`filter: ${(performance.now() - start).toFixed(2)} ms`);

    // 9. reduce (used for summing values)
    start = performance.now();
    sum = arr.reduce((acc, value) => acc + value, 0);
    console.log(`reduce: ${(performance.now() - start).toFixed(2)} ms`);
}

testLoopsPerformance();
