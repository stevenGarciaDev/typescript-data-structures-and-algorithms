export class BSTNode<T> {
    value: T;
    leftChild: BSTNode<T> | null;
    rightChild: BSTNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    public hasBothChildren(): boolean {
        return this.hasLeftChild() && this.hasRightChild();
    }

    public isALeaf(): boolean {
        return !this.hasLeftChild() && !this.hasRightChild();
    }

    public hasLeftChild(): boolean {
        return this.leftChild != null;
    }

    public hasRightChild(): boolean {
        return this.rightChild != null;
    }
}

export class BinarySearchTree<T> {
    root: BSTNode<T> | null;

    constructor() {
        this.root = null;
    }

    insertIteratively(value: T) {
        if (this.root === null) {
            this.root = new BSTNode<T>(value);
            return;
        }

        let current = this.root;
        while (current != null) {
            if (value < current.value) {
                
                if (current.hasLeftChild()) {
                    current = current.leftChild!;
                } else {
                    current.leftChild = new BSTNode<T>(value);
                    return;
                }
                   
            } else if (value >= current.value) {

                if (current.hasRightChild()) {
                    current = current.rightChild!;
                } else {
                    current.rightChild = new BSTNode<T>(value);
                    return;
                }

            }
        }
    }

    insert(value: T) {
        if (this.root === null) {
            this.root = new BSTNode<T>(value);
            return;
        }
        this._insert(this.root, value)!;
    }

    find() {

    }

    height(): number {
        if (this.root === null) return 0;

        return this._height(this.root);
    }

    private _insert(root: BSTNode<T> | null, value: T): BSTNode<T> | undefined {
        if (root === null) 
            return new BSTNode<T>(value);

        if (value < root.value) {
            root.leftChild = this._insert(root.leftChild, value)!;
        } else if (root.value <= value) {
            root.rightChild = this._insert(root.rightChild, value)!;
        }
    }

    private _height(root: BSTNode<T>): number {
        if (root === null) return -1;

        return Math.max(
            this._height(root.leftChild!),
            this._height(root.rightChild!)
        ) + 1;
    }
}

let bst = new BinarySearchTree<number>();

bst.insert(2);
bst.insert(1);
bst.insert(3);