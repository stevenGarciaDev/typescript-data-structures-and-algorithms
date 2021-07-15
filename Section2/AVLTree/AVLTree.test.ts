import { AVLTree } from './AVLTree';

describe('AVL Trees', () => {

    it('can create an empty tree', () => {
        let avlTree: AVLTree<number> = new AVLTree<number>();
        
        expect(avlTree.heightOfTree()).toBe(0);
    });

});