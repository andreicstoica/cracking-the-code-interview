//write code to remove duplicates form an unsorted linked list

export type Node = {
  value: number;
  next: Node | null;
};

function removeDuplicates(head: Node): Node {
  let valsSet = new Set<number>();

  let current: Node | null = head;
  let prev: Node | null = null;

  while (current != null) {
    if (valsSet.has(current.value)) {
      // already exists, remove
      // prev must exist because the set must have something inside, meaning we've added smthng alrdy
      prev!.next = current.next;
      current = current.next;
    } else {
      // add to set, move on
      valsSet.add(current.value);
      prev = current;
      current = current.next
    }
  }

  return head;
}

// gpt5 help me test:
// Helper to create linked list from array
export function createLinkedList(arr: number[]): Node {
  let head: Node = { value: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { value: arr[i], next: null };
    current = current.next;
  }
  return head;
}

// Helper to print linked list
export function printList(head: Node) {
  let arr: number[] = [];
  let current: Node | null = head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}

// Test cases
let list1 = createLinkedList([1, 2, 3, 2, 1]);
let list2 = createLinkedList([5, 5, 5, 5]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);

console.log(printList(removeDuplicates(list1))); // [1, 2, 3]
console.log(printList(removeDuplicates(list2))); // [5]
console.log(printList(removeDuplicates(list3))); // [1, 2, 3, 4, 5]

