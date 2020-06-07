class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let poppedTail = this.tail;
      this.tail = poppedTail.prev;
      this.tail.next = null;
      poppedTail.prev = null;
    }
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return null;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let unshiftedNode = new Node(val);
    if (!this.head) {
      this.head = unshiftedNode;
      this.tail = unshiftedNode;
    } else {
      let oldHead = this.head;
      this.head = unshiftedNode;
      this.head.next = oldHead;
      oldHead.prev = this.head;
    }
    //OR
    // else {
    // this.head.prev = unshiftedNode;
    // unshiftedNode.next = this.head;
    // this.head = unshiftedNode
    // }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count;
    let current;
    if (index < this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    let reqNode = this.get(index);
    if (reqNode) {
      reqNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let oldNodeAtIndex = this.get(index);
    let prevNode = oldNodeAtIndex.prev;

    newNode.next = oldNodeAtIndex;
    oldNodeAtIndex.prev = newNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    if (removedNode) {
      let prevNode = removedNode.prev;
      let nextNode = removedNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      removedNode.next = null;
      removedNode.prev = null;

      this.length--;
      return this;
    }
    return undefined;
  }

  print() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      let item = this.get(i);
      arr.push(item.val);
    }
    return arr;
  }

  reverse() {
    if (this.length <= 1) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }
    return this;
  }

  print2() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
  }
}

let list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(1100);
list.push(2200);
list.push(3300);
list.push(4400);
list.remove(5);
console.log(list.print());

/*
  Time complexity---
  Insertion-- O(1)
  Removal-- O(1)
  Accessing-- O(n)
  Searching-- O(n) OR O(n/2)
*/

/*

reverse() {

  	if(this.length == 0){
  		return null;
  	}
  	else if(this.length > 1){
  		let currNode = this.head;
  		let prevNode = null;
  		let nextNode = null;

  		for(let i = 0; i < this.length; i++){
  			prevNode  = currNode.prev;
  			nextNode = currNode.next;

  			if(prevNode == null){
  				this.tail = currNode;
  				currNode.next = null;
  				currNode.prev = nextNode;
  			}
  			else if(nextNode == null){
  				this.head = currNode;
  				currNode.prev = null;
  				currNode.next = prevNode;
  			}
  			else{
  				currNode.next = prevNode;
  				currNode.prev = nextNode;
  			}

  			currNode = nextNode;
  		}
  	}
  }

*/
