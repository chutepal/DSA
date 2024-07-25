class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {

    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        // Case 1:
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        while(true) {
            // Case 2:
            if(value === temp.value) return undefined;

            // Case 3:
            if(value < temp.value) {
                if(!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if(!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}

const myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(52);
myTree.insert(82);
debugger
myTree.insert(27)
console.log(myTree)