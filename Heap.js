class Heap {
  #heap = []; // # to make it private variable

  getHeap() {
    return [...this.#heap]; // ... returns a copy of private heap
  }

  // Private helper function: To return index of left child
  #leftChild(index) {
    return 2 * index + 1; 
  }

  // Private helper function: To return index of right child
  #rightChild(index) {
    return 2 * index + 2;
  }

  // Private helper function: To return index of parent
  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // Private helper function: To swap heap elements
  #swap(index1, index2) {
    return ([this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ]);
  }

  // To insert value in heap
  insert(value) {
    /** Steps:
     * 1. Push the value to the heap
     * 2. Current = last index of heap
     * 3. Run while loop while
     *      3a. index > 0
     *      3b. child > parent
     * 4. Within while loop: Swap the values and move the current position upwards
     */
    this.#heap.push(value);
    let current = this.#heap.length - 1;

    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parent(current)]
    ) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }
}

const myHeap = new Heap();
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(99);
myHeap.insert(58);

console.log(myHeap.getHeap())

myHeap.insert(100);
console.log(myHeap.getHeap())
