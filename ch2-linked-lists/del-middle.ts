// Implement an algorithm to delete a node in the middle 
// (i.e., any node but the first and last node, not necessarily the exact middle) 
// of a singly linked list, given only access to that node
import { Node } from './remove-dups'

function deleteMiddle(current: Node): void {
    // need to not delete anything with .next == null
    // OR not having something point to it

    if (!current || !current.next) return; // cant delete end

    current.value = current.next.value;
    current.next = current.next.next;
}

// gpt5 tests

function findNode(head: Node, value: number): Node | null {
    let cur: Node | null = head;
    while (cur) {
        if (cur.value === value) return cur;
        cur = cur.next;
    }
    return null;
}

function createLinkedList(values: number[]): Node | null {
    if (values.length === 0) return null;
    const head: Node = { value: values[0], next: null };
    let current = head;
    for (let i = 1; i < values.length; i++) {
        const node: Node = { value: values[i], next: null };
        current.next = node;
        current = node;
    }
    return head;
}

function printList(head: Node | null): void {
    const vals: number[] = [];
    let current = head;
    while (current) {
        vals.push(current.value);
        current = current.next;
    }
    console.log(vals.join(" -> "));
}


// --------- Console log tests ---------
let head = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log("Before deleting 3:");
printList(head);
const node3 = findNode(head, 3);
if (node3) deleteMiddle(node3);
console.log("After deleting 3:");
printList(head);

head = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log("\nBefore deleting 4:");
printList(head);
const node4 = findNode(head, 4);
if (node4) deleteMiddle(node4);
console.log("After deleting 4:");
printList(head);

head = createLinkedList([1, 2, 3]);
console.log("\nTry deleting tail (should do nothing):");
printList(head);
const nodeTail = findNode(head, 3);
if (nodeTail) deleteMiddle(nodeTail);
printList(head);