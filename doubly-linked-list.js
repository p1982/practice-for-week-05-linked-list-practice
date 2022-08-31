class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode
      const curent = this.head;
      this.head = newNode;
      this.head.next = curent
    }
    this.length++;
    return this;
  }

  addToTail(val) {
    const newNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curent = this.tail
      curent.next = newNode
      this.tail = newNode
      this.tail.prev = curent
      // this.tail.next = null
    }
    this.length++;
    return this;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;