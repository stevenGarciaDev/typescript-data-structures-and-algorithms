class AVLNode<T> {
    value: T;
    leftChild: AVLNode<T> | null;
    rightChild: AVLNode<T> | null;
    height: number;

    constructor(value: T) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
        this.height = 0;
    }

    public hasLeftChild(): boolean {
        return this.leftChild != null;
    }

    public hasRightChild(): boolean {
        return this.rightChild != null;
    }
}

export class AVLTree<T> {
    root: AVLNode<T> | null;

    constructor(rootValue?: T) {
        this.root = (rootValue === null) ? null : new AVLNode<T>(rootValue!);
    }

    public contains(value: T): boolean {
        if (this.root === null || this.root.value === null)
            return false;
        
        return this._contains(this.root, value);
    }

    public containsIterative(valueToFind: T): boolean {
        if (this.root === null || this.root.value === null)
            return false;

        if (this.root.value === valueToFind) return true;
        let current = this.root;
        while (current != null) {
            if (current.value === valueToFind) return true;
            if (current.hasLeftChild() && valueToFind < current.value) {
                current = current.leftChild!;
            } else if (current.hasRightChild() && valueToFind > current.value) {
                current = current.rightChild!;
            } else {
                return false;
            }
        }

        return false;
    }

    public insert(value: T): void {
        this.root = this._insert(this.root, value);
    }

    public heightOfTree(): number {
        if (this.root === null || this.root.value === undefined) return 0;
        return Math.max(
            this.height(this.root.leftChild),
            this.height(this.root.rightChild)
        ) + 1;
    }

    private _contains(node: AVLNode<T>, valueToFind: T): boolean {
        if (node === null) return false;
        if (node.value === valueToFind) return true;

        if (node.hasLeftChild() && valueToFind < node.value) {
            return this._contains(node.leftChild!, valueToFind);

        } else if (node.hasRightChild() && valueToFind > node.value) {
            return this._contains(node.rightChild!, valueToFind);
        }

        return false;
    }

    private _insert(node: AVLNode<T> | null, value: T): AVLNode<T> {
        if (node === null)
            return new AVLNode<T>(value);

        if (value < node.value) {
            node.leftChild = this._insert(node.leftChild, value);
        } else {
            node.rightChild = this._insert(node.rightChild, value);
        }

        this.setHeight(node);

        return this.balance(node);
    }

    private setHeight(node: AVLNode<T>) {
        node.height = Math.max(
            this.height(node.leftChild),
            this.height(node.rightChild)
        ) + 1;
    }

    private height(node: AVLNode<T> | null) {
        return (node === null) ? 0 : node.height;
    }

    private balance(node: AVLNode<T>) {
        if (this.isLeftHeavy(node)) {

            if (this.balanceFactor(node.leftChild) < 0) 
                this.rotateLeft(node.leftChild!);
            this.rotateRight(node);

        } else if (this.isRightHeavy(node)) {

            if (this.balanceFactor(node.rightChild) > 0)
                this.rotateRight(node.rightChild!);
            this.rotateLeft(node);    
            
        }

        this.setHeight(node);

        return node;
    }

    private balanceFactor(node: AVLNode<T> | null) {
        return (node === null) ? 0 : this.height(node.leftChild) - this.height(node.rightChild);
    }

    private isLeftHeavy(node: AVLNode<T>) {
        return this.balanceFactor(node) > 1;
    }

    private isRightHeavy(node: AVLNode<T>) {
        return this.balanceFactor(node) < -1;
    }

    private rotateLeft(node: AVLNode<T>) {
        let newRoot: AVLNode<T> = node.rightChild!;

        node.rightChild = newRoot.leftChild;

        newRoot.leftChild = node;
    }

    private rotateRight(node: AVLNode<T>) {
        let newRoot: AVLNode<T> = node.leftChild!;

        node.leftChild = newRoot.rightChild;
        
        newRoot.rightChild = node;
    }
}
