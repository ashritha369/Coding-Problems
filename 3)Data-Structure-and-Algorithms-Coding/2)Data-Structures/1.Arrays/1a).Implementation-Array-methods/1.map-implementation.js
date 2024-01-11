class myArray {
  constructor() {
    this.length = 0;
    // As arrays are objects in javascript, but objects cannot be iterated like arrays with its length, we are using []
    this.data = [];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    console.log(this.data);
  }
  //   TAKES CALLBACK
  map(callback) {
    let returningArray = [];
    for (let i = 0; i < this.data.length; i++) {
      returningArray[i] = callback(this.data[i]);
    }
    console.log(returningArray);
    return returningArray;
  }
}

let newArray = new myArray();
newArray.push("hi");
newArray.push("ashi");
newArray.push("myLove");

newArray.map((item) => item + 2);

// How it works:

// callback(this.data[i])==>callback("hi")=>("hi")=>"hi"+2
