# JavaScript Loop Performance Test Results

> **Unit:** milliseconds (ms). **Lower is better.** Rounded to nearest integer.

| Node.js | do...while | while | for | map | reduce | filter | forEach | for...of | for...in |
|---| ---| ---| ---| ---| ---| ---| ---| ---| ---| 
| 14 | 3 | 2 | 2 | 48 | 13 | 27 | 12 | 12 | 96 |
| 16 | 3 | 2 | 2 | 50 | 11 | 27 | 10 | 8 | 110 |
| 18 | 4 | 3 | 3 | 76 | 18 | 40 | 15 | 13 | 164 |
| 20 | 6 | 7 | 6 | 81 | 13 | 35 | 12 | 14 | 131 |
| 22 | 3 | 2 | 2 | 48 | 9 | 28 | 23 | 8 | 72 |
| 24 | 5 | 3 | 3 | 69 | 17 | 38 | 17 | 21 | 140 |
| 26 | 4 | 7 | 4 | 62 | 15 | 24 | 11 | 19 | 62 |
