import { BSTNode, BinarySearchTree } from './BinarySearchTree';

describe('Binary Search Tree', () => {
    it('should display correct height when inserting recursively', () => {
        let bst = new BinarySearchTree<number>();

        bst.insert(2);
        bst.insert(1);
        bst.insert(2);

        expect(bst.height()).toEqual(1);
    });
});