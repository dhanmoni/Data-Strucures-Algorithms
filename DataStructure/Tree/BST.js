class Node {
  constructor(val, right = null, left = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  //INSERT USING WHILE LOOP OR ANY OTHER LOOP :--------
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left
      }
      else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  //INSERT USING RECURSIVE FUNCTION: -----
  insertRecursive(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    else {
      const searchTree = (node) => {
        if (val < node.val) {
          if (node.left === null) {
            node.left = newNode;
            return this;
          } else {
            return searchTree(node.left)
          }
        }
        else if (val > node.val) {
          if (node.right === null) {
            node.right = newNode;
            return this;
          }
          else {
            return searchTree(node.right)
          }
        }
        else {
          return null
        }
      }

      return searchTree(this.root)
    }

  }

  // nullify(node) {
  //   if (node.left === null && node.right === null) {
  //     node = null;
  //     return this
  //   }
  // }

  // remove(val) {

  //   const removeNode = (root, val) => {
  //     if (!root) return null;
  //     if (root.left === null && root.right === null) {
  //       root = null;
  //       return root
  //     }

  //   }

  //   return removeNode(this.root, val)
  // }


  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left
      }
      else if (val > current.val) {
        current = current.right
      }
    }
  }

  findMax() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  findMin() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }


  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }


  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right)
    }
    traverse(this.root);
    return data
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val)
    }
    traverse(this.root);
    return data
  }

  deleteNode(key) {
    function deleteNodeHelper(root, key) {
      if (root === null) {
        // Empty tree return false;
      }
      if (key < root.data) {
        root.left = deleteNodeHelper(root.left, key);
        return root;
      } else if (key > root.data) {
        root.right = deleteNodeHelper(root.right, key);
        return root;
      } else {
        // No children
        //case 1 - a leaf node
        if (root.left === null && root.right === null) {
          root = null;
          return root;
        }
        // Single Child cases
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        // Both children, so need to find successor
        let currNode = root.right;
        while (currNode.left !== null) {
          currNode = currNode.left;
        }
        root.data = currNode.data;
        // Delete the value from right subtree.
        root.right = deleteNodeHelper(root.right, currNode.data);
        return root;
      }
    }
    // If a node is successfully removed, a reference will be received.
    return !(deleteNodeHelper(this.root, key) === false);
  }


}

let tree = new BST()
tree.insertRecursive(10)
tree.insertRecursive(7)
tree.insertRecursive(5)
tree.insertRecursive(6)
tree.insertRecursive(100)
tree.insertRecursive(-1)
tree.insertRecursive(17)
tree.deleteNode(100)
console.log(tree.BFS())
// console.log(tree.DFSPreOrder())
// console.log(tree.DFSInOrder())
// console.log(tree.DFSPostOrder())



