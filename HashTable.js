class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  // Hashing function to generate numeric index from key
  _hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size; // To make sure index lies withing the array bound
  }

  //   set(key, value) {
  //     const index = this._hash(key);
  //     this.table[index] = value;
  //   }

  // Rewriten to avoid collision
  set(key, value) {
    const index = this._hash(key);
    let bucket = this.table[index]; // Create a bucket at that index
    if (!bucket) {
      this.table[index] = [[key, value]]; // If bucket is empty, simply add 1st item
    } else {
      let sameKeyItem = bucket.find((item) => item[0] === key); // Check if bucket has array with same key
      if (sameKeyItem) {
        sameKeyItem[1] = value; // If same key found, update the value
      } else {
        bucket.push([key, value]); // Else add the new pair
      }
    }
  }

  //   get(key) {
  //     const index = this._hash(key);
  //     return this.table[index];
  //   }

  // Rewriten to avoid collision
  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  //   remove(key) {
  //     const index = this._hash(key);
  //     this.table[index] = undefined;
  //   }

  // Rewriten to avoid collision
  remove(key) {
    const index = this._hash(key);
    const sameKeyItem = this.get(key);
    if (sameKeyItem) {
      const bucket = this.table[index];
      bucket.splice(bucket.indexOf(sameKeyItem), 1);
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

let table = new HashTable(10);
// table.set("name", "David");
// table.set("age", 30);
// table.set("marks", 40);
// console.log(table.get("name"));
// table.display();
// console.log("-----------");
// table.remove("marks");
// table.display();

// After collision changes
table.set("name", "David");
table.set("mane", "xyz");
table.set("age", 33);
table.display()
console.log("---------------");
table.set("name", "Mark");
table.remove("mane");
table.display()
