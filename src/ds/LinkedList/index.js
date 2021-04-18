/**
 * Linked List
 *
 * A linked list is a data structure that stores multiple values in a linear fashion. Each value in a linked list is contained in its own node, an object that contains the data along with a link to the next node in the list.
 * The link is a pointer to another node object or null if there is no next node.
 * If each node has just one pointer to another node (most frequently called next) then the list is considered a singly linked list (or just linked list) whereas if each node has two links (usually previous and next) then it is considered a doubly linked list.
 *
 * Why use a linked list?
 *
 * The primary benefit of linked lists is that they can contain an arbitrary number of values while using only the amount of memory necessary for those values.
 * Previously (in C/C++) arrays needed to have pre-defined size, which will be used when allocating memory for the array.  One memory-scarce machines, you could easily run out of available memory using arrays. Linked lists were created to work around this problem.
 *
 * Though originally intended for better memory management, linked lists also became popular when developers didn’t know how many items an array would ultimately contain.
 * It was much easier to use a linked list and add values as necessary than it was to accurately guess the maximum number of values an array might contain.
 *
 * The built-in JavaScript Array type is not implemented as a linked list, though its size is dynamic and is always the best option to start with.
 *
 */

export class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export function traverseLinkedList(head) {
    let current = head;
    const collectedData = [];

    while (current !== null) {
        collectedData.push(current.data)
        current = current.next;
    }
    return collectedData;
};

export class LinkedList {
    constructor() {
        this["head"] = null;
    }

    //this function can be improved by storing the value of the "tail" of linked list, to insert it there, it will become O(1) from O(n)
    add(data) {

        // create a new node
        const newNode = new LinkedListNode(data);

        //special case: no items in the list yet
        if (this["head"] === null) {

            // just set the head to the new node
            this["head"] = newNode;
        } else {

            // start out by looking at the first node
            let current = this["head"];

            // follow `next` links until you reach the end
            while (current.next !== null) {
                current = current.next;
            }

            // assign the node into the `next` pointer
            current.next = newNode;
        }
    }

    //get method's performance ranges from O(1) when getting the first node, to O(n) - when getting the last node
    get(index) {

        // ensure `index` is a positive value
        if (index > -1) {

            // the pointer to use for traversal
            let current = this["head"];

            // used to keep track of where in the list you are
            let i = 0;

            // traverse the list until you reach either the end or the index
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;
            }

            // return the data if `current` isn't null
            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }
    }

    //complexity is same as get (depending on which index item is being removed from varies from O(1) to O(n))
    remove(index) {

        // special cases: empty list or invalid `index`
        if ((this["head"] === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }

        // special case: removing the first node
        if (index === 0) {
            const data = this["head"].data;

            // just replace the head with the next node in the list
            this["head"] = this["head"].next;

            return data;
        }

        // pointer use to traverse the list
        let current = this["head"];
        // keeps track of the node before current in the loop
        let previous = null;
        // used to track how deep into the list you are
        let i = 0;

        // same loops as in `get()`
        while ((current !== null) && (i < index)) {

            // save the value of current
            previous = current;

            // traverse to the next node
            current = current.next;

            // increment the count
            i++;
        }

        // if node was found, remove it
        if (current !== null) {

            // skip over the node to remove
            previous.next = current.next;

            // return the value that was just removed from the list
            return current.data;
        }

        // if node wasn't found, throw an error
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    *values(){

        let current = this["head"];

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }

    insertBefore(data, index){
        /**
         * if index is negative - do - done
         * if index is 0 - no traversal is needed - done
         * if list's head is null - just insert the item at head - done
         * traverse as required
         */
        if(index < 0 || this["head"] === null) throw new RangeError(`Index ${index} does not exist in the list.`);

        const node = new LinkedListNode(data);

        if(index === 0) {
            node.next = this["head"];
            this["head"] = node;
            return;
        }

        let current = this["head"];
        let previous = null;
        let i = 0;

        while ((current !== null) && (i < index)) {
            previous = current;

            // traverse to the next node
            current = current.next;

            // increment the count
            i++;
        }

        if(i < index)  throw new RangeError(`Index ${index} does not exist in the list.`);

        node.next = current;
        previous.next = node;
    }
}