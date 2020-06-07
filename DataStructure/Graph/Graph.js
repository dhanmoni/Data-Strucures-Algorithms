class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertext) {
    if (!this.adjacencyList[vertext]) this.adjacencyList[vertext] = []
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
  removeEdge(v1, v2) {
    const removeEdge1 = (v1, v2) => {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex !== v2)
    }
    const removeEdge2 = (v1, v2) => {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex !== v1)
    }
    removeEdge1(v1, v2)
    removeEdge2(v1, v2)
  }
  removeVertex(v1) {
    this.adjacencyList[v1].forEach(item => {
      this.removeEdge(item, v1)
    })
    delete this.adjacencyList[v1]
  }

  depthSearchRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;


    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(v => {
        if (!visited[v]) return dfs(v)
      })

    })(start)

    return result;
  }

  depthSearchIterative(start) {
    const result = [];
    const stack = [start];
    const visited = {}

    if (!start) return null;
    visited[start] = true;

    let currentItem;
    while (stack.length) {
      currentItem = stack.pop();
      result.push(currentItem);

      this.adjacencyList[currentItem].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v)
        }
      })
    }

    return result;
  }

  BFS(start) {
    const result = [];
    const queue = [start];
    const visited = {};
    if (!start) return null;
    visited[start] = true;
    let currentItem;

    while (queue.length) {
      currentItem = queue.shift();
      result.push(currentItem);
      this.adjacencyList[currentItem].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v)
        }
      })
    }
    return result;
  }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

console.log(graph.BFS("A"))
