class Heap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let idx = this.values.length - 1;
    let parentIdx = null;
    let parentNode = null;
    while (idx > 0) {
      parentIdx = Math.floor((idx - 1) / 2);
      parentNode = this.values[parentIdx];
      if (val <= this.values[parentIdx]) break;
      this.values[parentIdx] = val;
      this.values[idx] = parentNode;
      idx = parentIdx;
    }
    return this;
  }

  extractMax() {
    if (this.values.length <= 1) {
      this.values = [];
      return this;
    }
    let lastIdx = this.values.length - 1;
    let firstNodeVal = this.values[0];
    let lastNodeVal = this.values[lastIdx];

    this.values[0] = lastNodeVal;
    this.values[lastIdx] = firstNodeVal;
    let poppedNode = this.values.pop();

    let parentNodeVal = this.values[0]; //element
    let parentNodeIdx = 0; //idx

    let leftChildIdx = null;
    let rightChildIdx = null;
    let leftChildVal = null;
    let rightChildVal = null;

    while (parentNodeIdx < this.values.length) {
      leftChildIdx = 2 * parentNodeIdx + 1;
      rightChildIdx = 2 * parentNodeIdx + 2;

      if (
        leftChildIdx >= this.values.length - 1 ||
        rightChildIdx >= this.values.length - 1
      )
        break;

      leftChildVal = this.values[leftChildIdx];
      rightChildVal = this.values[rightChildIdx];

      let greaterChild = Math.max(leftChildVal, rightChildVal);
      let greaterChildIdx = this.values.indexOf(greaterChild);

      if (parentNodeVal > greaterChild) break;
      else if (parentNodeVal < greaterChild) {
        let temp = greaterChild;
        this.values[greaterChildIdx] = parentNodeVal;
        this.values[parentNodeIdx] = temp;
        parentNodeIdx = greaterChildIdx;
      }
    }

    return poppedNode;
  }
}

let heap = new Heap();
heap.insert(44);
heap.insert(8);
heap.insert(7);
heap.insert(20);
heap.insert(24);
heap.insert(18);
heap.insert(11);
heap.insert(76);
console.log(heap);

/*
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax() {
        let max = this.values[0];
        let end = this.values[this.length - 1];
        this.values[0] = end;
        this.values.pop();

        this.sinkDown();

        return max;
    }

    sinkDown() {
        let idx = this.values[0];
        let element = this.values[idx];
        let length = this.values.length;

        while(true) {
            let leftChildIdx = (2 * idx) + 1;
            let rightChildIdx = (2 * idx) + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(element < leftChild) {
                    swap = leftChildIdx;
                }
            }
            if(rightChild < length) {
                rightChild = this.values[rightChildIdx];
                if(
                (element < rightChild && swap === null) || 
                (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx
                }
            }
            if(swap === null) break;
             this.values[idx] = this.values[swap] 
             this.values[swap] = element;

            idx = swap
        }
    }
}
*/
