### Pointers:

# Pass by value example:
let a = 2;
let b = 2;

console.log(a) // 2
console.log(b) // 2

a = 5;

console.log(a) // 5
console.log(b) // 2

Here value of a is changed but value of b remains the same since we have copied the value.

# Pass by reference example:
let a = {
    value: 3
}
let b = a;

console.log(a) // {value: 3}
console.log(b) // {value: 3}

a = {
    value: 8
}

console.log(a) // {value: 8}
console.log(b) // {value: 8}

Here value of b will also change since we have copied it by reference. This means both the variable are pointing to same memory location.


### LinkedList

In array, memory allocation is contagious that means array elements are placed in a sequencial memory locations whereas in linked list, nodes are placed in a random memory locations and are connected by pointers.
                
                next 
                 |
                 |
Node:    (9)--->null


# BigO

Operations                          LinkedList                          Array
----------                          ----------                          -----

Push                                   O(1)*                             O(1)*
Pop                                    O(n)                              O(1)*
Shift                                  O(1)*                             O(n)
Unshift                                O(1)*                             O(n)
Insert                                 O(n)                              O(n)
Delete                                 O(n)                              O(n)
Lookup by index                        O(n)                              O(1)*
Lookup by value                        O(n)                              O(n)


# Under the hood

                head                    tail    
                |                       |
                |                       |
                2------>5------>7------>8------>null

LinkedList = {
                head: {
                    value: 2,
                    next: {
                        value: 5,
                        next: {
                            value: 7,
                            next: {
                                value: 8,
                                next: null
                            }
                        }
                    }
                }
            }


### Doubly LinkedList

Doubly linked list points towards both next and prev nodes.
         
         head                    tail
           |                       | 
            ------> ------> ------> ------> null
           2       5       7       8       
null<------ <------ <------ <------ <------


         prev                 next
          |                    |
          |                    |
Node:    null <----- 9 -----> null



### Binary Search Tree
    
Single node:            21  
                       /  \
                      /    \
                    null   null


BST:         4 <--- root
            / \
           /   \
          2     5 
         / \   / \
        1   3 4   6 

Rules:
1. If value > parent, place it on right
2. If value <> parent, place it on left
3. No duplicate values
4. If at all want to insert duplicate, add one more variable as *count* as shown below and increment it's value 
    {
        value: 21,
        left: null,
        right: null,
        count: 1
    }