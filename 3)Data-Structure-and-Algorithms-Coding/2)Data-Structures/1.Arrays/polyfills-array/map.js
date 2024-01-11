class myArray {
  constructor() {
    this.length = 0;
    // Replaced {} with []
    this.data = [];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    console.log(this.data);
  }
  map() {
    let returningArray = [];
    for (let i = 0; i < this.data.length; i++) {
      returningArray[i] = this.data[i] + 2;
    }
    console.log(returningArray);
    return returningArray;
  }
}

let newArray = new myArray();
newArray.push("hi");
newArray.push("ashi");
newArray.push("myLove");

newArray.map();
