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

    insert(data){
        const newNode = new BinaryTreeNode(data);
        if(this.root === null) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode){
        if(newNode.data < node.data) {
            node.left === null ? node.left = newNode : this.insertNode(node.left, newNode);
        } else {
            node.right === null ? node.right = newNode : this.insertNode(node.right, newNode);
        }
    }

    xremove(data){
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.removeNode(this.root, data);
    }

    // Method to remove node with a
    // given data
    // it recur over the tree to find the
    // data and removes it
    removeNode(node, key){

        // if the root is null then tree is
        // empty
        if(node === null)
            return null;

        // if data to be delete is less than
        // roots data then move to left subtree
        else if(key < node.data)
        {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        // if data to be delete is greater than
        // roots data then move to right subtree
        else if(key > node.data)
        {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // if data is similar to the root's data
        // then delete this node
        else
        {
            // deleting node with no children
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }

            // deleting node with one children
            if(node.left === null)
            {
                node = node.right;
                return node;
            }

            else if(node.right === null)
            {
                node = node.left;
                return node;
            }

            // Deleting node with two children
            // minumum node of the rigt subtree
            // is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }

    remove(data) {
        if(this.root === null) {
            return;
        }

        let parent;
        let current = this.root;
        let isLeft = false;
        let found = false;

        while(!found) { //this might need to also check for current = null
            if(data < current.data) {
                parent = current;
                current = current.left;
                isLeft = true;

            } else if(data > current.data ) {
                parent = current;
                current = current.right;
                isLeft = false;
            } else {
                found = true;
                if(current.left === null && current.right === null) {
                    current = null;
                    isLeft ? parent.left = null : parent.right = null;
                    return;
                }
                if(current.left === null && current.right !== null) {
                    isLeft ? parent.left = current.right : parent.right = current.right;
                } else if (current.left !== null && current.right === null) {
                    isLeft ? parent.left = current.left : parent.right = current.left;
                } else {
                    // const minMode = this.findMinNode(current.right);
                    // minMode.left = current.left;
                    // isLeft ? parent.left = minMode : parent.right = minMode;
                    const minNodeWithParent = this.findMinNodeAndItsParent(current.right);
                    if(!minNodeWithParent.parent) {

                    } else {
                        minNodeWithParent.node.left = current.left;
                        isLeft ? parent.left = minNodeWithParent.node : parent.right = minNodeWithParent.node;
                    }


                }
            }
        }
    }

    findMinNodeAndItsParent(node) {
        let parent;
        if(node.left === null)
            return { parent, node };
        else {
            parent = node;
            return { parent, node: this.findMinNode(node.left) };
        }

    }

    //  finds the minimum node in tree
    // searching starts from given node
    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if(node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }


    // remove(data)
    // Helper function
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)
    // postorder(node)
    // search(node, data)

    //insert without using recursion
    // insert(data){
    //     const newNode = new BinaryTreeNode(data);
    //     if(this.root === null) {
    //         this.root = newNode;
    //         return;
    //     }

    //     let current = this.root;
    //     while (current !== null) {
    //         if(data < current.data) {
    //             if(current.left === null) {
    //                 current.left = newNode;
    //                 break;
    //             } else {
    //                 current = current.left;
    //             }
    //         } else if(data > current.data){
    //             if(current.right === null) {
    //                 current.right = newNode;
    //                 break;
    //             } else {
    //                 current = current.right;
    //             }
    //         } else {
    //             break;
    //         }
    //     }

    // }
}