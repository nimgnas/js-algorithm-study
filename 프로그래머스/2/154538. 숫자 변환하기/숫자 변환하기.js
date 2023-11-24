function solution(x, y, n) {
    if(x === y) return 0
    
    const queue = new Queue()
    queue.enqueue([x, 0])
    const visited = new Set()
    
    while(queue.size) {
        const [value, cnt] = queue.dequeue()
        
        const a = value * 2
        const b = value * 3
        const c = value + n
        
        if(a === y || b === y || c === y) return cnt + 1
        
        
        if(a < y && !visited.has(a)) {
            queue.enqueue([a, cnt + 1])
            visited.add(a);
        }
        
        if(b < y && !visited.has(b)) {
            queue.enqueue([b, cnt + 1])
            visited.add(b);
        }
        
        if(c < y && !visited.has(c)) {
            queue.enqueue([c, cnt + 1])
            visited.add(c);
        }
    }
    
    return -1
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(element) {
    const newNode = new Node(element);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  dequeue() {
    const removed = this.front;
    this.front = this.front.next;
    this.size--;

    if (this.isEmpty()) {
      this.rear = null;
    }

    return removed.element;
  }
    
  isEmpty() {
    return this.size === 0;
  }
}