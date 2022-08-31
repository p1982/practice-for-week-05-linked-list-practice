class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head=null
    this.length=0
  }

  addToHead(val) {
    const node = new LinkedListNode(val)
    if(!this.head){
      this.head=node
    }else{
      const current = this.head
      this.head=node
      this.head.next=current
    }
    this.length++
  }

  addToTail(val) {
    const node = new LinkedListNode(val)
    if(this.head===null){
      this.head=node
    } else{
      let current = this.head
      while(current.next!==null){
        current=current.next
      }
      current.next=node
    }
    
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;