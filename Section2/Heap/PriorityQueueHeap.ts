import { MaxHeap } from "./MaxHeap";

// So the PriorityQueueHeap is just a wrapper around the MaxHeap class.
export class PriorityQueueHeap<T> {
    private maxHeap: MaxHeap<T>;

    constructor() {
        this.maxHeap = new MaxHeap<T>();
    }

    // Time complexity of O(log n)
    enqueue(item: T) {
        this.maxHeap.insert(item);
    }

    // Time complexity of O(log n)
    dequeue(): T {
        return this.maxHeap.remove();
    }

    isEmpty(): boolean {
        return this.maxHeap.isEmpty();
    }
}