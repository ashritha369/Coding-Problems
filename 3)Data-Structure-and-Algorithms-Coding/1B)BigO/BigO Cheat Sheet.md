# Big O Cheat Sheet:

## Link : [https://www.bigocheatsheet.com/](https://www.bigocheatsheet.com/)

## Big O's

- **Big O(1)** _Constant time_- **no loops**
- **O(log N)** _Logarithmic time_- usually **searching** algorithms have log n if they are sorted (**Binary Search**)
- **O(n)** _Linear_- **for loops, while loops** through 'n ' items
- **O(n log(n))** _Log Linear time_- usually **sorting operations**
- **O(n^2)** _Quadratic time_- every element in a collection needs to be compared to ever other element. **Two
  nested loops**
- **O(2^n)** _Exponential time_- **recursive algorithms** that solves a problem of size N
- **O(n!)** _Factorial time_- you are **adding a loop for every element**

- **Iterating through half a collection is still O(n)**

- **Two separate collections: O(a \* b)**

---

## What can cause time in a function?

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())
- **Rule 1: Always worst Case**
- **Rule 2: Remove Constants**
- **Rule 3: Different inputs should have different** variables. O(a+b). A and B arrays nested would be
  O(a\*b)
- \'+' for steps in order
- \'\*' for nested steps
- **Rule 4: Drop Non-dominant terms**

---

## What causes Space complexity?

- Variables
- Data Structures
- Function Call
- Allocation

---
