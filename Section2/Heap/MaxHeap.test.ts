import { MaxHeap } from "./MaxHeap";

describe('MaxHeap', () => {
    it('should bubble up max values when insert ascending numbers into heap', () => {
        const maxHeap = new MaxHeap<number>();

        maxHeap.insert(1);
        maxHeap.insert(2);
        maxHeap.insert(3);

        expect(maxHeap.heap).toEqual([3, 1, 2]);
    });

    it('should bubble up max values when insert descending numbers', () => {
        const maxHeap = new MaxHeap<number>();

        maxHeap.insert(3);
        maxHeap.insert(2);
        maxHeap.insert(1);

        expect(maxHeap.heap).toEqual([3, 2, 1]);
    });

    it('should insert randomized numbers', () => {
        const maxHeap = new MaxHeap<number>();

        maxHeap.insert(10);
        maxHeap.insert(5);
        maxHeap.insert(17);
        maxHeap.insert(4);
        maxHeap.insert(22);

        expect(maxHeap.heap).toEqual([22, 17, 10, 4, 5]);
    });

    it('should bubble down when remove max value', () => {
        const maxHeap = new MaxHeap<number>();

        maxHeap.insert(10);
        maxHeap.insert(5);
        maxHeap.insert(17);
        maxHeap.insert(4);
        maxHeap.insert(22);
        maxHeap.remove();

        expect(maxHeap.heap).toEqual([17, 10, 4, 5]);
    });
});