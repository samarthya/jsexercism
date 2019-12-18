export class Node {
  constructor(element) {
    this._value = element;
    this._next = null;
    this._prev = null;
  }

  get value() {
    return this._value;
  }
  
  set next( element ) {
    this._next = element;
  }

  set prev(element){
    this._prev = element;
  }

  get next() {
    return this._next;
  }

  get prev() {
    return this._prev;
  }
}

/**
 * Linked list implementation in Java Script.
 */
export class LinkedList {
  constructor() {
    this._head = this._tail = null;
    this._size = 0;
  }

  push(value) {
    if((this._head == null) && (this._size == 0)) {
      // Add your first element
      this._head = new Node(value);

      // Adjust tail.
      this._tail = this._head;

      this._size++;
    } else {
     
      // Next is null so add the element here.
      var lastElement = this._tail;
      console.log(lastElement != null? lastElement.value: "Not found.")
      this._tail = new Node(value);

      this._tail.next = null;
      this._tail.prev = lastElement;

      // The next pointer needs to be adjusted as well.
      lastElement.next = this._tail;
      console.log(this._tail != null? this._tail.value: " Last element NaN.")
      this._size++;
    }
  }

  pop() {
    console.log(" List size: " + this._size);

    if(this._size != 0) {
      console.log(this._tail != null? this._tail.value: 0);
      if (this._tail != null) {
        let retElement = this._tail;

        if(retElement.prev != null) {
          this._tail = retElement.prev;
        } else {
          //No element left.
          this._tail = null;
          this._head = null;
        }
        this._size--;
        return retElement.value;
      }
    }
    throw new Error("no element to pop");
  }

  shift() {
    // Remove value at front.
    if(this._size != 0) {
      console.log(" Shift " + (this._head != null? this._head.value: " No number") );
      if (this._head != null) {
        let retElement = this._head;
        this._head = retElement.next;
        this._size--;
        return retElement.value;
      }
    }
    throw new Error("no element to shift");
  }

  unshift(value) {
    if((this._head == null) && (this._size == 0)) {
      // Add your first element
      this._head = new Node(value);

      // Adjust tail.
      this._tail = this._head;

      this._size++;
    } else {
     
      // Prev is null so add the element here.
      var firstElement = this._head;

      console.log(" First element: " + (firstElement != null? firstElement.value: "Not found."));
      this._head = new Node(value);

      this._head.next = firstElement;
      this._head.prev = null;
      
      // The next pointer needs to be adjusted as well.
      firstElement.prev = this._head;
      console.log(this._head != null? this._head.value: " First element NaN.")
      this._size++;
    }
  }

  delete(value) {
    if(this._size != 0) {
      console.log(" Delete " + value );
      var itNode = this._head;
      while(itNode) {
        if(itNode.value == value) {
          // Delete logic

          if(itNode.prev != null && itNode.next != null) {
            // A head exists somewhere.
            // The previous next is the next to current.
            (itNode.prev).next = itNode.next;
            // The next prev is current prev.
            (itNode.next).prev = itNode.prev;

          } else if(itNode.prev == null && itNode.next != null) {
            // First element
            this._head = itNode.next;
            this._head.prev = null;
            // Tail is maintained.
          } else if(itNode.prev != null && itNode.next == null){
            // Last element
            this._tail = itNode.prev;
            this._tail.next = null;
          } else {
            // Deletes the only element.
            console.log(" Deletes only element.");
            this._head == null;
            this._tail == null;
          }

          console.log( " Element found ");
          //delete itNode;
          this._size--;
          return;
        } // Delete only if element found
        itNode = itNode.next;
      }
    }
    return;
  }

  count() {
    return this._size;
  }
}
