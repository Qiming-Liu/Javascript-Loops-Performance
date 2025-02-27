const fs = require('fs');
const performance = require('perf_hooks').performance;

function testLoopsPerformance() {
    const arr = Array.from({ length: 10_000_000 }, (_, i) => i);
    let sum = 0;
    let start;
    const results = [];

    function benchmark(label, callback) {
        sum = 0;
        start = performance.now();
        callback();
        const duration = (performance.now() - start).toFixed(2);
        results.push(`${label}, ${duration}`);
    }

    benchmark("for", () => {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    });

    benchmark("for...in", () => {
        for (let i in arr) {
            sum += arr[i];
        }
    });

    benchmark("for...of", () => {
        for (let value of arr) {
            sum += value;
        }
    });

    benchmark("forEach", () => {
        arr.forEach(value => {
            sum += value;
        });
    });

    benchmark("while", () => {
        let i = 0;
        while (i < arr.length) {
            sum += arr[i];
            i++;
        }
    });

    benchmark("do...while", () => {
        let i = 0;
        do {
            sum += arr[i];
            i++;
        } while (i < arr.length);
    });

    benchmark("map", () => {
        arr.map(value => value * 2);
    });

    benchmark("filter", () => {
        arr.filter(value => value % 2 === 0);
    });

    benchmark("reduce", () => {
        sum = arr.reduce((acc, value) => acc + value, 0);
    });

    // Ensure the last newline is removed, and data is properly formatted
    fs.writeFileSync(`performance-results.txt`, results.join("\n") + "\n");
}

testLoopsPerformance();
