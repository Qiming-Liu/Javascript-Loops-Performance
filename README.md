# JavaScript Loop Performance Test Results

> **Unit:** milliseconds (ms). **Lower is better.** Rounded to nearest integer.

| Node.js | do...while | while | for | map | reduce | filter | forEach | for...of | for...in |
|---| ---| ---| ---| ---| ---| ---| ---| ---| ---| 
| 12 | 5 | 4 | 4 | 117 | 23 | 37 | 19 | 17 | 165 |
| 14 | 6 | 3 | 4 | 74 | 21 | 34 | 20 | 17 | 137 |
| 16 | 4 | 3 | 3 | 68 | 18 | 31 | 15 | 13 | 146 |
| 18 | 4 | 3 | 3 | 70 | 17 | 33 | 15 | 13 | 148 |
| 20 | 4 | 8 | 5 | 75 | 13 | 28 | 12 | 13 | 125 |
| 22 | 3 | 4 | 3 | 78 | 13 | 37 | 37 | 15 | 101 |
| 24 | 4 | 4 | 3 | 62 | 16 | 27 | 17 | 20 | 125 |
| 25 | 4 | 4 | 3 | 61 | 17 | 25 | 13 | 22 | 71 |
