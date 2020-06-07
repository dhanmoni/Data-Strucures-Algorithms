class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return null;
    let poppedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = poppedNode.next;
      poppedNode.next = null;
    }
    this.size--;
    return poppedNode;

    /*
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
     this.size--;
    */
  }
}

let stack = new Stack();
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
