export class MaxHeap<T> {
    heap: T[];

    constructor() {
        this.heap = new Array<T>();
    }

    getMax(): T {
        if (this.heap.length === 0)
            throw new Error("Heap is empty. Cannot get max value");
        
        return this.heap[0];
    }

    insert(value: T) {
        this.heap.push(value);

        this.bubbleUp();
    }

    remove(): T {
        if (this.heap.length === 0)
            throw new Error("Heap is empty");
        
        let rootValue = this.heap[0];
        this.heap.shift();

        this.bubbleDown();

        return rootValue;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }
    
    findKthLargest() {

    }

    static heapify() {

    }

    // Time complexity of O(log n)
    private bubbleUp() {
        let idx = this.heap.length - 1;
        
        while (idx > 0 && this.heap[idx] > this.heap[this.parent(idx)]) {
            this.swap(idx, this.parent(idx));

            idx = this.parent(idx);
        }
    }

    // Time complexity of O(log n)
    private bubbleDown() {
        let idx = 0;
        while (idx < this.heap.length && !this.isValidParent(idx)) {
            const largerChildIndex = this.largerChildIndex(idx);
            this.swap(idx, largerChildIndex);
            idx = largerChildIndex;
        }
    }

    private isValidParent(parentIndex: number): boolean {
        if (!this.hasLeftChild(parentIndex)) return true;
        
        const leftChild = this.leftChild(parentIndex);

        if (this.hasRightChild(parentIndex)) {
            const rightChild = this.rightChild(parentIndex)
            return this.heap[parentIndex] >= leftChild && this.heap[parentIndex] >= rightChild;
        }

        return this.heap[parentIndex] >= leftChild;
    }

    private largerChildIndex(parentIndex: number): number {
        if (!this.hasLeftChild(parentIndex)) return parentIndex;

        const leftChild = this.leftChild(parentIndex);

        if (this.hasRightChild(parentIndex)) {
            const rightChild = this.rightChild(parentIndex);
            return leftChild > rightChild ? 
                    this.leftChildIndex(parentIndex) :
                    this.rightChildIndex(parentIndex);
        }
        return this.leftChildIndex(parentIndex);
    }

    private swap(index1: number, index2: number) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private hasLeftChild(parentIndex: number): boolean {
        return this.leftChildIndex(parentIndex) < this.heap.length;
    }

    private hasRightChild(parentIndex: number): boolean {
        return this.rightChildIndex(parentIndex) < this.heap.length;
    }

    private leftChildIndex(index: number) {
        return (index * 2) + 1;
    }

    private rightChildIndex(index: number) {
        return (index * 2) + 2;
    }

    private leftChild(parentIndex: number): T {
        return this.heap[this.leftChildIndex(parentIndex)];
    }

    private rightChild(parentIndex: number): T {
        return this.heap[this.rightChildIndex(parentIndex)];
    }
}
