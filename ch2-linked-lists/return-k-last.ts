// find kth to last element of a singly linked list

import { Node, createLinkedList, printList } from './remove-dups.ts';

function findElements(head: Node, k: number): number[] {
    let counter = 0;
    let elements: number[] = [];
    let current: Node | null = head;

    // iterate across the list, start
    while (current != null) {
        counter++;
        if (counter >= k + 1) {
            elements.push(current.value);
            current = current.next;
        } else {
            current = current.next;
        }
    }

    return elements;
}

// gpt5 gen tests
// Test 1: Normal list
let list1 = createLinkedList([10, 20, 30, 40, 50]);
console.log("List 1:", printList(list1));
console.log("k=2 →", findElements(list1, 2)); // expect [20, 30, 40, 50]

// Test 2: k=1 (should return all elements)
let list2 = createLinkedList([1, 2, 3]);
console.log("List 2:", printList(list2));
console.log("k=1 →", findElements(list2, 1)); // expect [1, 2, 3]

// Test 3: k larger than list length (should return [])
let list3 = createLinkedList([5, 6]);
console.log("List 3:", printList(list3));
console.log("k=5 →", findElements(list3, 5)); // expect []