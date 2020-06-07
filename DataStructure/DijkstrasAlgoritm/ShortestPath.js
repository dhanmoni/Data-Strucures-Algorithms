class PriorityQueue {
  constructor() {
    this.values = [];
  }
  sort() {
    return this.values.sort((a, b) => a.priority - b.priority)
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }
}

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

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const previous = {};
    const distances = {};
    let smallest;
    let path = [] //to return at end
    //Build up initial state;
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0)
      }
      else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null;
    }

    //as long as there is something to visit--
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //We are done
        // we need to return the path at end;
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];

          //Calculate new distances to neighboring nodes--
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we git to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }

    }

    return path.concat(smallest).reverse()

  }



}


let graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));