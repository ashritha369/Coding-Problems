//https://leetcode.com/problems/generate-fibonacci-sequence/description/

function* fibGenerator() {
    let prevValue = 0;
    let currentValue = 1;

    while (true) {
        yield prevValue;
        const nextValue = prevValue + currentValue;
        prevValue = currentValue;
        currentValue = nextValue;
    }
}

// Example usage of the infinite generator
const gen = fibGenerator();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// Continue to call gen.next() to generate more Fibonacci numbers indefinitely
