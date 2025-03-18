function nestedLoop(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum += i * j;
        }
    }
    return sum;
}

function nestedRecursive(n, i = 0, j = 0, sum = 0) {
    if (i >= n) return sum;
    if (j >= n) return nestedRecursive(n, i + 1, 0, sum);
    return nestedRecursive(n, i, j + 1, sum + i * j);
}

// Function to measure execution time
function benchmark(func, n, iterations) {
    let totalTime = 0;
    
    for (let k = 0; k < iterations; k++) {
        let start = performance.now();
        func(n);
        let end = performance.now();
        totalTime += (end - start);
    }
    
    return totalTime / iterations; // Return average execution time
}

const n = 100; // Adjust n to prevent stack overflow in recursion
const iterations = 10000;

console.log("Running benchmarks, please wait...");

// Benchmarking loop
console.time("Loop Test");
let avgLoopTime = benchmark(nestedLoop, n, iterations);
console.timeEnd("Loop Test");

// Benchmarking recursion
console.time("Recursion Test");
let avgRecursionTime = benchmark(nestedRecursive, n, iterations);
console.timeEnd("Recursion Test");

// Output results
console.log(`Average execution time over ${iterations} iterations:`);
console.log(`Nested Loop: ${avgLoopTime.toFixed(6)} ms`);
console.log(`Nested Recursion: ${avgRecursionTime.toFixed(6)} ms`);
