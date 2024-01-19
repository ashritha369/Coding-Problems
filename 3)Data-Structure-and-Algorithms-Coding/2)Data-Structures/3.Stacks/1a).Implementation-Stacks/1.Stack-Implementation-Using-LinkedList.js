class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();

myStack.push("Meta");

/* OUTPUT: 
{
    "top": {
        "value": "Meta",
        "next": null
    },
    "bottom": {
        "value": "Meta",
        "next": null
    },
    "length": 1
}

*/
myStack.push("Target");
myStack.push("AHA!");
myStack.push("Google");
myStack.push("Amazon");
myStack.push("Meesho");
myStack.push("Flipkart");
/*
OUTPUT: 
{
    "top": {
        "value": "Flipkart",
        "next": {
            "value": "Meesho",
            "next": {
                "value": "Amazon",
                "next": {
                    "value": "Google",
                    "next": {
                        "value": "AHA!",
                        "next": {
                            "value": "Target",
                            "next": {
                                "value": "Meta",
                                "next": null
                            }
                        }
                    }
                }
            }
        }
    },
    "bottom": {
        "value": "Meta",
        "next": null
    },
    "length": 7
}


*/
myStack.peek();

/* {
    "value": "Flipkart",
    "next": {
        "value": "Meesho",
        "next": {
            "value": "Amazon",
            "next": {
                "value": "Google",
                "next": {
                    "value": "AHA!",
                    "next": {
                        "value": "Target",
                        "next": {
                            "value": "Meta",
                            "next": null
                        }
                    }
                }
            }
        }
    }
} */
myStack.pop();
/*
OUTPUT:
{
    "top": {
        "value": "Meesho",
        "next": {
            "value": "Amazon",
            "next": {
                "value": "Google",
                "next": {
                    "value": "AHA!",
                    "next": {
                        "value": "Target",
                        "next": {
                            "value": "Meta",
                            "next": null
                        }
                    }
                }
            }
        }
    },
    "bottom": {
        "value": "Meta",
        "next": null
    },
    "length": 6
}
 */
myStack.peek();
/*
OUTPUT:

{
    "value": "Meesho",
    "next": {
        "value": "Amazon",
        "next": {
            "value": "Google",
            "next": {
                "value": "AHA!",
                "next": {
                    "value": "Target",
                    "next": {
                        "value": "Meta",
                        "next": null
                    }
                }
            }
        }
    }
}
 */
