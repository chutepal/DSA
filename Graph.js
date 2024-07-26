class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertix(vertix) {
    if (!this.adjacencyList[vertix]) {
      this.adjacencyList[vertix] = new Set();
    }
  }

  addEdge(vertix1, vertix2) {
    if (!this.adjacencyList[vertix1]) {
      this.addVertix(vertix1);
    }
    if (!this.adjacencyList[vertix2]) {
      this.addVertix(vertix2);
    }
    this.adjacencyList[vertix1].add(vertix2);
    this.adjacencyList[vertix2].add(vertix1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }

  // Check whether edge/connection exists between two vertices
  hasEdge(vertix1, vertix2) {
    return (
      this.adjacencyList[vertix1].has(vertix2) &&
      this.adjacencyList[vertix2].has(vertix1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) return;
    for(let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(adjacentVertex, vertex)
    }
    delete this.adjacencyList[vertex];
  }
}

let myGraph = new Graph();
myGraph.addVertix("A");
myGraph.addVertix("B");
myGraph.addVertix("C");

myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");

myGraph.display();
console.log(myGraph.hasEdge("A", "B")); // Check whether edge/connection exists between two vertices

myGraph.removeEdge('A', 'B');
myGraph.display();

myGraph.removeVertex('A');
myGraph.display();
