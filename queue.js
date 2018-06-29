//Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null;
  }

}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new _Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    newNode.prev = this.last;
    this.last.next = newNode;
    this.last = newNode;
  }
  dequeue() {
    if (!this.first) {
      return;
    }
    const result = this.first;
    this.first = result.next;
    if (result === this.last) {
      this.last = null;
    }
    return result.value;
  }
}

function peek(q) {
  return q.first.value;
}

function display(q) {
  let current = q.first;
  let temp;
  while (current) {
    temp = current;
    current = current.next;
    return temp.value;
  }
}

module.exports = { Queue, peek, display };