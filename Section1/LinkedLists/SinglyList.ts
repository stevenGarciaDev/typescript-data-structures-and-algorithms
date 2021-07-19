export class SinglyNode<T> {
    value: T;
    previous: SinglyNode<T> | null;
    next: SinglyNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

export class SinglyList<T> {
    head: SinglyNode<T> | null;
    tail: SinglyNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFirst(value: T) {
        const first = new SinglyNode<T>(value);
        if (this.head === null) {
            this.head = first;
            this.tail = first;
            return;
        }

        first.next = this.head;
        this.head!.previous = first;
        this.head = first;
    }

    addLast(value: T) {
        const last = new SinglyNode<T>(value);
        if (this.head === null) {
            this.head = last;
            this.tail = last;
            return;
        }
        
        last.previous = this.tail;
        this.tail!.next = last;
        this.tail = last;
    }

    indexOf(value: T) {
        if (this.head === null) return -1;
        let index = 0;
        let node: SinglyNode<T> | null = this.head;
        while (node != null) {
            if (node.value === value) return index;
            index++;
            node = node.next;
        }
        return -1;
    }

    contains(value: T): boolean {
        return this.indexOf(value) != -1;
    }

    removeFirst(): T {
        if (this.head === null)
            throw new Error(' List is empty. No items to remove.');

        const headValue = this.head.value;

        if (this.head.next === null) {
            this.head = null;
            return headValue;
        }

        let secondNode = this.head.next;
        secondNode!.previous = null;
        this.head = secondNode;

        return headValue;
    }
    
    print() {
        let node = this.head;
        while (node != null) {
            console.log(node.value);
            node = node.next;
        }
    }
}