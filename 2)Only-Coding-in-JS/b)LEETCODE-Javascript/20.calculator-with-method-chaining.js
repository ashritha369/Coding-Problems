//https://leetcode.com/problems/calculator-with-method-chaining/description/
class Calculator {
    constructor(value1) {
        this.value1 = value1;
        this.result = value1;
    }


    add(value) {
        this.result = this.result + value;
        return this;
    }

 
    subtract(value) {
        this.result = this.result - value;
        return this;
    }


    multiply(value) {
        this.result = this.result * value;
        return this;
    }

 
    divide(value) {
        if (value !== 0) {
            this.result = this.result / value;
            return this;
        } else {
            throw new Error('Division by zero is not allowed');
        }
    }


    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

  
    getResult() {
        return this.result;
    }
}
const CALCULATOR=new Calculator(10).add(5).subtract(7).getResult();
console.log(CALCULATOR)