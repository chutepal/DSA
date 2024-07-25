class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if(this.length === 0) return undefined;

    let temp = this.head;
    if(this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = temp.next;
        temp.next = null;
        this.head.prev = null
    }
    this.length--;
    return temp;
  }

  get(index) {
    // In doubly linked list we have a benefit since we have prev pointer as well. We can write the loop efficiently by checking whether index is in the first half or the second half of the list and start the loop from either head or tail accordingly.

    if(index < 0 || index > this.length - 1) return undefined;
    let temp;
    if(index < this.length / 2) {
        temp = this.head;
        for(let i=0; i < index; i++) {
            temp = temp.next;
        }
    } else {
        temp = this.tail;
        for(let i=this.length - 1; i > index; i--) {
            temp = temp.prev
        }
    }
    return temp;
  }

  set(index, value) {
    // Same as singly linked list
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if(index === 0) this.unshift(value);
    if(index === this.length) this.push(value)
    if(index < 0 || index > this.length) return false;
    
    let before = this.get(index - 1);
    let after = this.get(index)
    const newNode = new Node(value);
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length - 1) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let temp = this.get(index)
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let myDblLinkedList = new DoublyLinkedList(2);
myDblLinkedList.push(3);
myDblLinkedList.push(4);
myDblLinkedList.pop();
myDblLinkedList.unshift(5);
myDblLinkedList.shift();
console.log(myDblLinkedList.get(1))
myDblLinkedList.set(2, 9);
myDblLinkedList.remove(2);
myDblLinkedList.insert(3, 99)
console.log(myDblLinkedList);
