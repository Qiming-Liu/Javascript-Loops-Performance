# JavaScript Loop Performance Test Results

> **Unit:** milliseconds (ms). **Lower is better.** Rounded to nearest integer.

| Node.js | do...while | while | for | map | reduce | filter | forEach | for...of | for...in |
|---| ---| ---| ---| ---| ---| ---| ---| ---| ---| 
| 20 | 3 | 4 | 3 | 52 | 8 | 23 | 7 | 8 | 86 |
| 22 | 4 | 4 | 3 | 74 | 18 | 33 | 15 | 12 | 147 |
| 24 | 3 | 3 | 3 | 59 | 14 | 30 | 14 | 19 | 113 |
| 26 | 3 | 7 | 3 | 61 | 16 | 25 | 13 | 21 | 73 |
