# To execute code

Run node <Filename>.js

# Pointers:

## Pass by value example:
let a = 2;
let b = 2;

console.log(a) // 2
console.log(b) // 2

a = 5;

console.log(a) // 5
console.log(b) // 2

Here value of a is changed but value of b remains the same since we have copied the value.

## Pass by reference example:
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


# LinkedList

In array, memory allocation is contagious that means array elements are placed in a sequencial memory locations whereas in linked list, nodes are placed in a random memory locations and are connected by pointers.
                
                next 
                 |
                 |
Node:    (9)--->null


## BigO

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


## Under the hood

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


# Doubly LinkedList

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



# Binary Search Tree
    
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


# Hash table

#LINK: https://www.youtube.com/watch?v=kTh5nAqCkOA&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=29

* A hash table, also known as hash map, is a data structure that is used to store key-value pairs
* Given a key, you can associate a value with that key for very fast lookup
* Javascript's object is a special implementation of the hash table data structure. However, Object class adds it's own keys. Key that you input may conflict and overwrite the inherited default properties.

Here we will be creating our own hash table.

## A hashing funtion:
1. accepts the string key
2. converts it into hash code
3. maps it to a numeric index(withing the bounds of array)

## Operations:
* Set: To store a key-value pair
* Get: To retrieve a value given its key
* Remove: To delete a key value pair
                                                                    
                                                                    
        Keys                                                        Values              
                                     ___________               ________________           
                                    |           |             |00|             |           
         in ----------------------> |           |------------>|01|  India      |    
                                    |           |             |02|             |  
         au ----------------------> |   Hash    |------------>|03|  Australia  |    
                                    | Function  |             |04|             |  
         fr ----------------------> |           |------------>|05|  France     |  
                                    |           |             |06|             |  
         it ----------------------> |           |------------>|07|  Italy      |   
                                    |           |             |08|             | 
                                    |___________|             |09|             | 
                                                              |10|_____________|  

## Usage

 Hash table are typically implemented where constant time lookup and insertion are required

 Examples:
1. Database indexing
2. Caches

## Collision

Hashing function may generate same index which will overwrite the previous data resulting into loss of data.
To avoid that, we can store an array of key-value pair at the same location

        Keys                                                                Values              
                                     ___________               _____________________________________           
                                    |           |             |00|                                  |           
         in ----------------------> |           |------------>|01| [['in', 'India'] [ni, Nicola]]   | <----- Bucket   
                                    |           | /           |02|                                  |
         ni ----------------------> |           |/            |03|                                  |
                                    |           |             |04|                                  |  
         au ----------------------> |   Hash    |------------>|05|  [['au', 'Australia']]           |    
                                    | Function  |             |06|                                  |  
         fr ----------------------> |           |------------>|07|  [['fr', 'France']]              |  
                                    |           |             |08|                                  |  
         it ----------------------> |           |------------>|09|  [['it', 'Italy']]               |   
                                    |           |             |10|                                  | 
                                    |___________|             |11|                                  | 
                                                              |12|__________________________________|  



# Graph

A graph is a non-linear data structure that consists of a finite number of vertices(also called nodes) connected by edges.

Trees are a specific type of a graph data structure.

## Graph visualization
                B
               / \
              /   \
             A     C 

Nodes/Vertices: A,B,C
Edges: -- (Lines connecting nodes)

## Types of graphs

 1. Directed
 - A graph in which edges have directions
 - Edges are usually represented by arrows pointing in the direction the graph can be traversed
    A ----> B ----> C

 2. Undirected 
 - A graph in which edges are bi-directional
 - A graph can be traveresed in either direction
 - The absence of arrows tells us that the graph is undirected
    A ---- B ---- C
    C ---- B ---- A

More types:
* A graph having only vertices and no edges
* Multiple edges from one node
* Cycles in the graph
* Self loops on a node
* Some disconnected nodes
* Weights on the edges representing the cost of traversing on that edge


## Usage

1. Google maps
    Nodes: Cities
    Edges: Paths connecting the cities

2. Social media sites
    Nodes: Users
    Edges: Links between connections


## Adjacency matrix vs Adjacency list

                                                            B
                                                           / \
                                                          /   \
                                                         A     C 

                        |   Adjacency Matrix                                        Adjacency list
                        |
                        |       A   B   C                                        Vertices    Adjacent vertices
                        |      ----------                                             A ------> B
  Representation        |   A | 0   1   0                                             B ------> A, C
                        |   B | 1   0   1                                             C ------> B
                        |   C | 0   1   0                   
                        |
                        |   0 -> Not connected
                        |   1 -> Connected
                        |
  Example               |   adjacencyMatrix =                                        adjacencyList = {                
                        |     [                                                         'A': ['B'],
                        |       [0, 1, 0],                                              'B': ['A', 'C'],
                        |       [1, 0, 1],                                              'C': ['B']
                        |       [0, 1, 0]                                           }  
                        |     ]
                        |
                        |   
                        |                          
   Storage              |   - More efficient                                        - Less efficient
                        |   - Store all values irresptive of whether                - Store the values for the existing edges
                        |     edge exists or not                                      only
                        |
                        |   
   Inserting/Finding    |   - Linear time complexity                                - Constant time complexity
   adjacent nodes       |
                        |
                        |
   Storing additional   |   - To be stored externally                               - Can be stored in the same list
   value(e.g. weight)   |


# Heap

1. It is similar to Binary search Tree(BST), only difference is that highest value is at the top in heap.
2. Major diff in implementation of heaps and BST is, heaps are implemented using array whereas BST uses node
3. It is necessary that each node is greater that it's descendents
4. Two types of heaps are:
                        

                  Max heap (node > descendents)                       Min heap (node < descendents)

                   99                        99                                     18
                   /\                        /\                                     /\
                  /  \                      /  \                                   /  \
                72    61       OR         72    55                               27    61  
               / \    / \                / \    / \                             / \    / \ 
             58  55  27  18            58  61  27  18                         58  55  72  99  

  
## Array implementation:

There are two common ways to implement the heap:
1. Start with index 0
2. Leave index 0 blank

     99                                                                * 1 as start index:
      |                                            leftChild = 2 * parentIndex         parent = math.floor(childIndex / 2)
      |___________                                 rightChild = 2 * parentIndex - 1
           |     |                  
          72     61                                                    * 0 as start index:
           |     |___________________________      leftChild = 2 * parentIndex + 1     parent = math.floor((childIndex - 1) / 2)
           |__________________      |       |      rightChild = 2 * parentIndex + 2
                       |     |      |       |
                      58     55     27     18 



|    |99 | 72  | 61  |  58  | 55 |  27 |  18 |      <---------- Array
 -------------------------------------------- 
   0   1    2     3      4     5     6     7        <---------- Index      

                    OR

 |99 | 72  | 61  |  58  | 55 |  27 |  18 |   |      <---------- Array
 -------------------------------------------- 
   0   1    2     3      4     5     6     7        <---------- Index 


If tree is not complete, then array would look as below:
     99
      |                                     
      |___________                          
           |     |
          72     61
           |     |___________________________
           |__________________      |       |
                       |     |      |       |
                      58            27     18 

|    |99 | 72  | 61 | 58  |      |  27 |  18 |      <---------- Array
 -------------------------------------------- 
   0   1    2     3    4      5     6     7        <---------- Index 


 # Remove

 Here only one element can be removed: the one at the top
