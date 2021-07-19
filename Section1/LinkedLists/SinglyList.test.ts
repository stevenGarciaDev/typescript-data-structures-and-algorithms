import { SinglyList } from './SinglyList';

describe('Singly Linked List', () => {
    it('should add to tail', () => {
        const singly = new SinglyList<number>();

        singly.addLast(4);
        singly.addLast(5);
        singly.addLast(6);

        expect(singly.tail?.value).toBe(6);
    });

    it('should add to head', () => {
        const singly = new SinglyList<number>();

        singly.addLast(2);
        singly.addLast(3);
        singly.addFirst(1);

        expect(singly.head?.value).toBe(1);
    });

    // Index starting from 0
    it('should return index of item', () => {
        const singly = new SinglyList<number>();
        singly.addLast(10);
        singly.addLast(20);
        singly.addLast(30);
        singly.addLast(40);
        singly.addLast(50);

        const index = singly.indexOf(30);

        expect(index).toBe(2);
    });

    it('should return -1 if item not in list', () => {
        const singly = new SinglyList<number>();
        singly.addLast(10);
        singly.addLast(20);
        singly.addLast(30);
        singly.addLast(40);
        singly.addLast(50);

        const index = singly.indexOf(4);

        expect(index).toBe(-1);
    });

    it('should return true if contains item', () => {
        const singly = new SinglyList<number>();
        singly.addFirst(2);
        singly.addFirst(1);

        const doesContain = singly.contains(1);

        expect(doesContain).toBe(true);
    });

    it('should return false if does not contain item', () => {
        const singly = new SinglyList<number>();
        singly.addFirst(2);
        singly.addFirst(1);

        const doesContain = singly.contains(3);

        expect(doesContain).toBe(false);
    });

    it('should remove first', () => {
        const singly = new SinglyList<number>();
        singly.addLast(1);
        singly.addLast(2);
        singly.addLast(3);

        const removedValue = singly.removeFirst();

        expect(removedValue).toBe(1);
    });

    it('should remove last', () => {

    });

    it('should convert to an array', () => {

    });

    it('should reverse', () => {

    });

    it('should find the nth from the end', () => {

    });
});