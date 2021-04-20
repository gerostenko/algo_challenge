/**
 * Binary Search tree is a node-based tree data strcuture, which contants left and right branches.
 * Left branch contains the nodes with key that is smaller than the node's key;
 * Right branch contains the nodes with key that is larger than the node's key;
 * Both branches should also be binary search trees.
 * This data structure does not allow duplicates.
 */


export class BinaryTreeNode {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    // insert(data){
    //     const newNode = new BinaryTreeNode(data);
    //     if(this.root === null) {
    //         this.root = newNode;
    //         return;
    //     }
    //     this.insertNode(this.root, newNode);

    // }

    // insertNode(node, newNode){
    //     // let currentNode = newNode.data < node.data ? node.left : node.right;

    //     if(newNode.data < node.data) {
    //         node.left === null ? node.left = newNode : this.insertNode(node.left, newNode);
    //     } else {
    //         node.right === null ? node.right = newNode : this.insertNode(node.right, newNode);
    //     }
    // }


    //insert without using recursion
    insert(data){
        const newNode = new BinaryTreeNode(data);
        if(this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (current !== null) {
            if(data < current.data) {
                if(current.left === null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            } else if(data > current.data){
                if(current.right === null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            } else {
                break;
            }
        }

    }

    // remove(data)
    // Helper function
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)
    // postorder(node)
    // search(node, data)
}