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

    // To insert a new Node in the Tree
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

    // To check whether BST contains the given value
    contains(value) {
        // Case 1
        if(this.root === null) return false;

        // Case 2
        let temp = this.root;
        while(temp) {
            if(value === temp.value) return true;

            if(value < temp.value) {
                temp = temp.left
            } else {
                temp = temp.right
            }
        }
        return false;
    }
}

const myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(52);
myTree.insert(82);
myTree.insert(27)
console.log(myTree.contains(108))