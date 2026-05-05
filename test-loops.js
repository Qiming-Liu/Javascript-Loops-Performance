const fs = require('fs');
const { performance } = require('perf_hooks');

const size = 1000000; // 1M items
const arr = Array.from({ length: size }, (_, i) => i);
const results = {};

// Simple benchmark wrapper
const run = (name, fn) => {
  const start = performance.now();
  fn();
  results[name] = Math.round(performance.now() - start);
};

// Benchmarks using arrow functions
run('do...while', () => { let i = 0, s = 0; do { s += arr[i++]; } while (i < size); });
run('while',     () => { let i = 0, s = 0; while (i < size) { s += arr[i++]; } });
run('for',       () => { let s = 0; for (let i = 0; i < size; i++) { s += arr[i]; } });
run('map',       () => { let s = 0; arr.map(x => s += x); });
run('reduce',    () => arr.reduce((s, x) => s + x, 0));
run('filter',    () => { let s = 0; arr.filter(x => { s += x; return true; }); });
run('forEach',   () => { let s = 0; arr.forEach(x => s += x); });
run('for...of',  () => { let s = 0; for (const x of arr) { s += x; } });
run('for...in',  () => { let s = 0; for (const i in arr) { s += arr[i]; } });

// Output format: "name: value"
fs.writeFileSync('performance-results.txt', 
  Object.entries(results).map(([k, v]) => `${k}: ${v}`).join('\n')
);
