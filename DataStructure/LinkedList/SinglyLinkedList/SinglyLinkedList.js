class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}



class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;
    return this
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp
  }


  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let current = this.get(index)
    if (!current) return false;
    current.val = val;
    return true;

  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val); // !! returns boolean
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removeNode = this.get(index - 1)
    let ReqNode = removeNode.next;
    removeNode.next = ReqNode.next;
    this.length--;
    return ReqNode;

  }

  reverse() {
    if (!this.head) return null;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this
  }

  print() {
    let arr = []
    for (let i = 0; i < this.length; i++) {
      let item = this.get(i)
      arr.push(item.val)
    }
    return arr
  }
}

let list = new SinglyLinkedList()
list.push(20)
list.push(67)
list.push(28)
list.push(22)
list.push(99)
list.push(60)

console.log(list.print())
console.log(list.reverse())
console.log(list.print())
console.log(list)


/*
  Time complexity---
  Insertion-- O(1)
  Removal-- O(1) / O(n)
  Accessing-- O(n)
  Searching-- O(n)
*/

