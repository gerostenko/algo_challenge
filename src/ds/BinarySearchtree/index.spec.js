import { BinaryTreeNode, BinarySearchTree } from "./index";

describe("BinaryTreeNode", () => {
    it("generates a correct data structure", () => {
        const node = new BinaryTreeNode(42);

        expect(node.data).toEqual(42);
        expect(node.left).toEqual(null);
        expect(node.right).toEqual(null);

    });
});

describe("BinarySearchTree", () => {
    it("has a root property which is set to null on construction", () => {
        const bst = new BinarySearchTree();
        expect(bst.root).toEqual(null);
    });

    describe("insert", () => {
        it("correctly inserts data into an empty Binary Search Tree", () => {
            const bst = new BinarySearchTree();
            bst.insert(42);

            expect(bst.root.data).toEqual(42);
            expect(bst.root.left).toEqual(null);
            expect(bst.root.right).toEqual(null);
        });

        it("correctly inserts the nodes", () => {
            const bst = new BinarySearchTree();
            bst.insert(42);
            bst.insert(15);

            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);

            bst.insert(18);
            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.right.data).toEqual(18);

            bst.insert(19);
            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.right.data).toEqual(19);


            bst.insert(20);
            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.right.data).toEqual(19);
            expect(bst.root.left.right.right.right.data).toEqual(20);

            bst.insert(14);
            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.left.data).toEqual(14);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.right.data).toEqual(19);
            expect(bst.root.left.right.right.right.data).toEqual(20);

            bst.insert(44);
            expect(bst.root.data).toEqual(42);
            expect(bst.root.right.data).toEqual(44);

            bst.insert(45);
            expect(bst.root.data).toEqual(42);
            expect(bst.root.right.data).toEqual(44);
            expect(bst.root.right.right.data).toEqual(45);

            bst.insert(43);

            expect(bst.root.data).toEqual(42);
            expect(bst.root.right.data).toEqual(44);
            expect(bst.root.right.right.data).toEqual(45);
            expect(bst.root.right.left.data).toEqual(43);

        });
    });
});