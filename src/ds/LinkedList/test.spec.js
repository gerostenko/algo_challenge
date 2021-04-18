import {
    LinkedListNode,
    traverseLinkedList,
    LinkedList
} from "./index";

describe("LinkedListNode", () => {
    it("correctly creates a Linked List Node with initial value set", () => {
        const head = new LinkedListNode(12);
        head.next = new LinkedListNode(99);
        head.next.next = new LinkedListNode(37);

        expect(head.data).toEqual(12);
        expect(head.next.data).toEqual(99);
        expect(head.next.next.data).toEqual(37);
    });

    it("creates and updates head of the Linked List from empty head", () => {
        const head = new LinkedListNode();

        expect(head.data).toEqual(undefined);
        expect(head.next).toEqual(null);

        head.next = new LinkedListNode(42);

        expect(head.data).toEqual(undefined);
        expect(head.next.data).toEqual(42);

        head.data = 99;

        expect(head.data).toEqual(99);
        expect(head.next.data).toEqual(42);

    });
});

describe("traverseLinkedList", () => {
    it("correctly traverses the Linked List", () => {
        const head = new LinkedListNode(12);
        head.next = new LinkedListNode(99);
        head.next.next = new LinkedListNode(37);

        expect(traverseLinkedList(head)).toEqual([12, 99, 37]);
    });
});

describe("LinkedList", () => {
    it("correctly creates a Linked List", () => {
        const ll = new LinkedList();
        expect(ll.head).toEqual(null);

        ll.add(42);

        expect(ll.head.data).toEqual(42);
        expect(ll.head.next).toEqual(null);
    });

    describe("get", () => {
        it("returns undefined if requested the data from any index", () => {
            const ll = new LinkedList();
            expect(ll.get(0)).toEqual(undefined);
            expect(ll.get(42)).toEqual(undefined);
        });

        it("correctly gets the data based on index", () => {
            const ll  = new LinkedList();
            ll.add(15);
            ll.add(23);
            ll.add(56);
            ll.add(98);

            expect(ll.get(0)).toEqual(15);
            expect(ll.get(1)).toEqual(23);
            expect(ll.get(2)).toEqual(56);
            expect(ll.get(3)).toEqual(98);
            expect(ll.get(4)).toEqual(undefined);
            expect(ll.get(42)).toEqual(undefined);
        });

        it("correctly gets the data even if data is undefined", () => {
            const ll  = new LinkedList();
            ll.add(15);
            ll.add(undefined);
            ll.add(56);
            ll.add(98);

            expect(ll.get(1)).toEqual(undefined);
            expect(ll.get(2)).toEqual(56);

        });
    });

    describe("remove", () => {
        it("throws an error if attempts to remove item from empty linked list", () => {
            const ll = new LinkedList();

            expect(() =>ll.remove(0)).toThrow();
        });

        it("thorws an error if pass negative index", () => {
            const ll = new LinkedList();
            ll.add(42)

            expect(() =>ll.remove(-2)).toThrow();
            expect(() =>ll.remove(-1)).toThrow();
        });

        it("throws an error if unable to find item by index, because index is too large", () => {
            const ll = new LinkedList();
            ll.add(42);
            ll.add(15);
            ll.add(123);

            expect(() =>ll.remove(2)).not.toThrow();
            expect(() =>ll.remove(3)).toThrow();
            expect(() =>ll.remove(4)).toThrow();
        });

        it("returns the found item on passed index and correctly updated the list", () => {
            const ll = new LinkedList();
            ll.add(42);
            ll.add(15);
            ll.add(123);
            ll.add(567);

            const removedItem = ll.remove(1);
            expect(removedItem).toEqual(15);

            expect(ll.head.data).toEqual(42);
            expect(ll.head.next.data).toEqual(123);
            expect(ll.head.next.next.data).toEqual(567);
            expect(() => ll.head.next.next.next.data).toThrow();
        });

        it("correctly removes the item on idexn 0", () => {
            const ll = new LinkedList();
            ll.add(42);
            ll.add(15);
            ll.add(123);
            ll.add(567);

            const removedItem = ll.remove(0);

            expect(removedItem).toEqual(42);
            expect(ll.head.data).toEqual(15);
            expect(ll.head.next.data).toEqual(123);
        });
    });

    describe("iterator", () => {
        it("correctly iterates over the LinkedList", () => {
            const ll = new LinkedList();
            ll.add(42);
            ll.add(15);
            ll.add(123);
            ll.add(567);

            const result = [];
            for (const item of ll) {
                result.push(item);
            }

            expect(result).toEqual([42, 15, 123, 567])
        });

        it("correctly destructures the values", () => {
            const ll = new LinkedList();
            ll.add(42);
            ll.add(15);
            ll.add(123);
            ll.add(567);

            const expected = [42, 15, 123, 567];

            expect([...ll.values()]).toEqual(expected);
            expect([...ll]).toEqual(expected);
        });
    });

    describe("insertBefore", () => {

        let ll;
        beforeEach(() => {
            ll = new LinkedList();
            ll.add(42);
            ll.add(15);
            ll.add(123);
            ll.add(567);
        });

        it("throws an error if index is below 0", () => {
            expect(() =>  ll.insertBefore(55, -1)).toThrow();
        });

        it("throws an error if linked list is empty", () => {
            ll = new LinkedList();
            expect(() =>  ll.insertBefore(55, 0)).toThrow();
        });

        it("throws an error if called with an index larger than the legth of linked list", () => {
            expect(() =>  ll.insertBefore(55, 5)).toThrow();
        });

        it("correctly inserts an item when index is 0", () => {
            ll.insertBefore(12, 0);
            expect(ll.get(0)).toEqual(12);
            expect(ll.get(1)).toEqual(42);
        });

        it("correctly iserts an item with index greater than 0", () => {
            ll.insertBefore(12, 1);
            expect(ll.get(0)).toEqual(42);
            expect(ll.get(1)).toEqual(12);
            expect(ll.get(2)).toEqual(15);
        });

        it("correctly inserts at the end of the list", () => {
            ll.insertBefore(12, 4);
            expect(ll.get(0)).toEqual(42);
            expect(ll.get(1)).toEqual(15);
            expect(ll.get(2)).toEqual(123);
            expect(ll.get(3)).toEqual(567);
            expect(ll.get(4)).toEqual(12);
        });
    });

});