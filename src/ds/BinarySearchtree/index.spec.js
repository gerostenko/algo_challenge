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
            expect(bst.root.left.right.right.data).toEqual(19);


            bst.insert(20);
            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.right.data).toEqual(19);
            expect(bst.root.left.right.right.right.data).toEqual(20);

            bst.insert(14);
            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.left.data).toEqual(14);
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

    describe("remove", () => {
        let bst;

        beforeEach(() => {
            bst = new BinarySearchTree();
            bst.insert(42);
            bst.insert(15);
            bst.insert(18);
            bst.insert(19);
            bst.insert(20);
            bst.insert(14);
        });

        it("correctly deletes a node without children", () => {
            bst.remove(20);

            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.left.data).toEqual(14);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.right.data).toEqual(19);
            expect(bst.root.left.right.right.right).toEqual(null);
        });

        it("correctly removes a node with one child (right)", () => {
            bst.remove(19);

            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.left.data).toEqual(14);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.right.data).toEqual(20);
        });

        it("correctly removes a node with one child (left)", () => {
            bst.insert(13);
            bst.remove(14);

            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(15);
            expect(bst.root.left.left.data).toEqual(13);
            expect(bst.root.left.right.data).toEqual(18);
            expect(bst.root.left.right.right.data).toEqual(19);
        });

        it("correctly removes a node wth two children", () => {
            bst.remove(15);

            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(18);
            expect(bst.root.left.left.data).toEqual(14);
            expect(bst.root.left.right.data).toEqual(19);
            expect(bst.root.left.right.right.data).toEqual(20);
        });

        it("correctly sets the min node in place of the removed node if has both children present", () => {
            bst = new BinarySearchTree();
            bst.insert(42);
            bst.insert(20);
            bst.insert(12);
            bst.insert(30);
            bst.insert(22);
            bst.insert(31);
            bst.insert(32);
            bst.insert(21);
            bst.insert(23);

            bst.remove(20);

            expect(bst.root.data).toEqual(42);
            expect(bst.root.left.data).toEqual(21);
            expect(bst.root.left.left.data).toEqual(12);
            expect(bst.root.left.right.data).toEqual(30);
            expect(bst.root.left.right.left.data).toEqual(22);
            expect(bst.root.left.right.left.left).toEqual(null);
            expect(bst.root.left.right.left.right.data).toEqual(23);
        });

        // it("correctly sets the min node in place of the removed node if has both children present with other children", () => {
        //     bst = new BinarySearchTree();
        //     bst.insert(42);
        //     bst.insert(20);
        //     bst.insert(30);
        //     bst.insert(12);
        //     bst.insert(22);
        //     bst.insert(31);
        //     bst.insert(32);
        //     bst.insert(21);
        //     bst.insert(23);

        //     bst.remove(30);

        //     expect(bst.root.data).toEqual(42);
        //     expect(bst.root.left.data).toEqual(20);
        //     expect(bst.root.left.left.data).toEqual(12);
        //     expect(bst.root.left.right.data).toEqual(31);
        //     expect(bst.root.left.right.left.data).toEqual(22);
        //     expect(bst.root.left.right.right.data).toEqual(32);
        //     expect(bst.root.left.right.left.left.data).toEqual(21);
        //     expect(bst.root.left.right.left.right.data).toEqual(23);
        // });
    });
});