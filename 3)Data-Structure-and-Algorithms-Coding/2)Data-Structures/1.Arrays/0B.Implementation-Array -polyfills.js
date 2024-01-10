class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    console.log("Get:", this.data[index]);
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    console.log("Push:", this.data, "Length:", this.length);
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    console.log(
      "Pop:",
      lastItem,
      "New Array:",
      this.data,
      "Length:",
      this.length
    );
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    console.log(
      "Delete:",
      item,
      "New Array:",
      this.data,
      "Length:",
      this.length
    );
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  map(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this.data[i], i, this.data));
    }
    console.log("Map:", newArray.data, "Length:", newArray.length);
    return newArray;
  }

  filter(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this.data)) {
        newArray.push(this.data[i]);
      }
    }
    console.log("Filter:", newArray.data, "Length:", newArray.length);
    return newArray;
  }

  myReduce(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this.data[i], i, this.data);
    }

    console.log("MyReduce:", accumulator);
    return accumulator;
  }

  myFind(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this.data)) {
        console.log("MyFind:", this.data[i]);
        return this.data[i];
      }
    }
    console.log("MyFind:", undefined);
    return undefined;
  }

  myEvery(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this.data[i], i, this.data)) {
        console.log("MyEvery:", false);
        return false;
      }
    }
    console.log("MyEvery:", true);
    return true;
  }

  mySome(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this.data)) {
        console.log("MySome:", true);
        return true;
      }
    }
    console.log("MySome:", false);
    return false;
  }

  myConcat(...arrays) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(this.data[i]);
    }

    for (const arr of arrays) {
      if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
          newArray.push(arr[i]);
        }
      } else {
        newArray.push(arr);
      }
    }

    console.log("MyConcat:", newArray.data, "Length:", newArray.length);
    return newArray;
  }

  myFlat(depth = 1) {
    const flattenedArray =
      depth > 0
        ? this.myReduce(
            (acc, val) =>
              acc.myConcat(
                Array.isArray(val) ? val.myFlat(depth - 1) : new MyArray(val)
              ),
            new MyArray()
          )
        : new MyArray(...this);
    console.log(
      "MyFlat:",
      flattenedArray.data,
      "Length:",
      flattenedArray.length
    );
    return flattenedArray;
  }

  reverse() {
    const reversed = new MyArray();
    for (let i = this.length - 1; i >= 0; i--) {
      reversed.push(this.data[i]);
    }
    console.log("Reverse:", reversed.data, "Length:", reversed.length);
    return reversed;
  }
}

// Example usage:
const newArray = new MyArray();

// Push example
newArray.push(1);
newArray.push(2);
newArray.push(3);

// Pop example
newArray.pop();

// Delete example
newArray.delete(0);

// Map example
const mappedArray = newArray.map((item) => item * 2);

// Filter example
const filteredArray = newArray.filter((item) => item > 1);

// MyReduce example
const reducedValue = newArray.myReduce((acc, item) => acc + item, 0);

// MyFind example
const foundItem = newArray.myFind((item) => item === 2);

// MyEvery example
const everyResult = newArray.myEvery((item) => item > 0);

// MySome example
const someResult = newArray.mySome((item) => item > 1);

// MyConcat example
const concatenatedArray = newArray.myConcat([4, 5], 6);

// MyFlat example
const flatArray = newArray.myFlat();

// Reverse example
const reversedArray = newArray.reverse();
