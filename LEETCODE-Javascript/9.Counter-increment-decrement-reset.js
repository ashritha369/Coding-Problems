//https://leetcode.com/problems/counter-ii/description/
//https://leetcode.com/problems/counter-ii/solutions/3494650/day3-o-1-solving-it-in-3-different-ways-and-which-one-is-the-best-way/
const init = 5; // Initial value

class Counter {
    constructor(inputDigit) {
        this.inputDigit = inputDigit;
        this.output = [];
        this.prevValue = inputDigit;
    }

    increment() {
        this.prevValue++;
        this.output.push(this.prevValue);
    }

    reset() {
        this.prevValue = this.inputDigit;
        this.output.push(this.prevValue);
    }

    decrement() {
        this.prevValue--;
        this.output.push(this.prevValue);
    }
}

createCounter = new Counter(init);
createCounter.decrement();
createCounter.increment();
createCounter.reset();
console.log(createCounter.output);