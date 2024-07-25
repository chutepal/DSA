// Since we will need to create node for various operations, create separate common method for creating a single node pointing to null m
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // Basic initialization of linked list
    const newNode = new Node(value); // Create a new node
    this.head = newNode; // Assign it to the head
    this.tail = this.head; // Assign it to the tail
    this.length = 1; // Set initial length of list to 1
  }

  push(value) {
    /**Steps
     * 1. Create a new node
     * 2. Check if linkedList is empty
     * 3. Case 1: If yes, assign node to head and tail
     * 4. Case 2: If no, assign the value to tail
     * 5. Update tail
     * 6. Update length
     */

    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    /**Steps:
     * Case 1: Zero items
     *          Return undefined
     * Case 2: 2 or more items
     *          Take two variables pre and temp
     *          temp to move forward
     *          pre to store prev value
     *          Run while loop till you hit the tail
     *          Once you hit the tail, assign pre value to tail
     *
     *   temp                                     temp                                    temp                                    temp
     *   |                                         |                                       |                                       |
     *   |                                         |                                       |                                       |
     *   2------>7------>9------>null      2------>7------>9------>null    2------>7------>9------>null    2------>7------>9------>null
     *   |                                 |                                       |                                       |
     *   |                                 |                                       |                                       |
     *   pre                              pre                                     pre                                     pre
     *
     * Case 3: 1 item
     *         Once you complete above operation, check if length is reduced to 0.
     *         If yes, that means linked list has become empty
     *         Reset head and tail to null
     */
    // Case 1
    if (!this.head) return undefined;
    // Case 2
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    // pre.next = null;
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    // Case 3
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next; // re-assign the head node
    temp.next = null; // disconnect the head node
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined; // If index is out of the bound, return undefined

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      // If temp is not undefined
      temp.value = value;
      return true; // To stop code execution
    }
    return false; // To stop code execution
  }

  insert(index, value) {
    // Case 1
    if (index === 0) return this.unshift(value);
    // Case 2
    if (index === this.length) return this.push(value);
    // Case 3
    if (index < 0 || index > this.length) return false;
    // Case 4
    let pre = this.get(index - 1);
    let newNode = new Node(value);
    newNode.next = pre.next;
    pre.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    // Case 1
    if (index < 0 || index >= this.length) return undefined;
    // Case 2
    if (index === 0) return this.shift();
    // Case 3
    if (index === this.length - 1) return this.pop();
    // Case 4
    let pre = this.get(index - 1);
    let temp = this.get(index);
    pre.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    /**
     *   head                   tail                    tail                    head
     *   |                       |                        |                       |
     *   |                       |                        |                       |
     *   2------>7------>9------>6---->null      null<----2<------7<------9<------6
     *
     *
     * Steps:
     * 1. Switch head and tail
     * 2. Take 3 variables to store previous node(prev), current node(temp) and next node(next)
     * 3. Keep moving positions and change the pointers
     *  */

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  findMiddleNode() {
    if (this.length <= 0) return undefined;
    const midInd = Math.floor(this.length / 2);
    return this.get(midInd);
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(6);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.pop();
myLinkedList.unshift(2);
myLinkedList.shift();
console.log(myLinkedList);
console.log(myLinkedList.get(3));
console.log(myLinkedList.get(-1));
console.log(myLinkedList.get(9));
myLinkedList.set(2, 9);
console.log(myLinkedList.get(2));
// Insert operation
myLinkedList.push(3);
myLinkedList.insert(1, 8);
console.log(myLinkedList.get(0));
console.log(myLinkedList.get(1));
console.log(myLinkedList.get(2));
myLinkedList.remove(1);
// Remove operation
console.log(myLinkedList.get(0));
console.log(myLinkedList.get(1));
console.log(myLinkedList.get(2));
// Reverse operation
myLinkedList.push(3);
myLinkedList.push(2);
myLinkedList.push(1);
console.log(myLinkedList.get(0));
console.log(myLinkedList.get(1));
console.log(myLinkedList.get(2));
console.log(myLinkedList.get(3));
myLinkedList.reverse();
console.log(myLinkedList.get(0));
console.log(myLinkedList.get(1));
console.log(myLinkedList.get(2));
console.log(myLinkedList.get(3));
