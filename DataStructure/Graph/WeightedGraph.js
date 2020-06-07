class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v1]) return null
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }


}

let weightedGraph = new WeightedGraph();

weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addEdge("A", "B", 10);
weightedGraph.addEdge("A", "C", 6);
weightedGraph.addEdge("B", "C", 2);
console.log(weightedGraph.adjacencyList)

