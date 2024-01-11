class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    console.log(this.data);
  }
  map(givenArray) {
    let returningArray = [];
    for (let i = 0; i < givenArray.length; i++) {
      returningArray[i] = givenArray[i] + 2;
    }
    console.log(returningArray);
    return returningArray;
  }
}

let newArray = new myArray();
newArray.push("hi");
newArray.push("ashi");
newArray.push("myLove");

newArray.map(["hi", "ashi", "there"]);
