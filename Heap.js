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

  // To insert value in heap: O(log n)
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

  #sinkDown(index) {
    let ind = index;
    let maxIndex = index;

    while(true) {
        let leftChildInd = this.#leftChild(ind);
        let rightChildInd = this.#rightChild(ind);

        if(this.#heap[leftChildInd] > this.#heap[maxIndex] && leftChildInd < this.#heap.length) {
            maxIndex = leftChildInd;
        }
        if(this.#heap[rightChildInd] > this.#heap[maxIndex] && rightChildInd < this.#heap.length) {
            maxIndex = rightChildInd;
        }
        if(maxIndex !== ind) {
            this.#swap(maxIndex, ind);
            ind = maxIndex;
        } else {
            return;
        }
    }
  }

  // Removes top element: O(log n)
  remove() {
    // Case 1: 0 values
    if(this.#heap.length < 1) return;

    // Case 2: 1 value
    if(this.#heap.length === 1) return this.#heap.pop();

    // Case 3: 2+ values
    const maxValue = this.#heap[0]; // To return the top value
    this.#heap[0] = this.#heap.pop(); // Make tree complete by moving last value to the top first
    console.log('Before sink down=>', this.getHeap())
    this.#sinkDown(0); // Re-arrange heap to make it a complete tree
    console.log('After sink down=>', this.getHeap())

    return maxValue;
  }
}

const myHeap = new Heap();
myHeap.insert(75);
myHeap.insert(80);
myHeap.insert(55);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(65);

myHeap.insert(95);
console.log(myHeap.getHeap())

myHeap.remove();
