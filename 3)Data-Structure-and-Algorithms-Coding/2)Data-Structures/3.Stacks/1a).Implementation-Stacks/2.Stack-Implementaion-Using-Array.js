class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();

myStack.push("Meta");
myStack.push("Target");
myStack.push("AHA!");
myStack.push("Google");
myStack.push("Amazon");
myStack.push("Meesho");
myStack.push("Flipkart");

myStack.peek();
myStack.pop();
myStack.peek();
