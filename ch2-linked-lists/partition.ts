// Write code to partition a linked list around a value x, 
// such that all nodes less than x come before all nodes greater than or equal to x. 
// If x is contained within the list, the values of x only need to be after the elements less than x (see below). 
// The partition element x can appear anywhere in the "right partition"; 
// it does not need to appear between the left and right partitions.
import { Node } from './remove-dups'

// EXAMPLE 
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

// function partition(head: Node, partition: number): Node {
//     // need to just put stuff around the partition node
//     // iterate through to find partition node, keep node in a variable
//     // iterate through LL again:
//     //   adding stuff right after the head if smaller, 
//     //   or right after partition node itself if bigger

//     let partitionNode: Node;
//     let ogHead = head;
//     let current = head;

//     while (head != null) {
//         if (head.value === partition) {
//             partitionNode = head;
//         }
//         head = head.next!;
//     }

//     if (!partitionNode) {
//         // partition not found
//         return ogHead;
//     }

//     while (current != null) {
//         const next = current.next;

//         if (current.value >= partition) {
//             // if bigger or equal, add after
//             let temp = partitionNode!.next;
//             partitionNode!.next = current;
//             // make sure the line continues no broken links
//             current.next = temp;
//         } else {
//             // if smaller, add at the beginning (before)
//             let temp = ogHead.next;
//             ogHead!.next = current;
//             // make sure the line continues no broken links
//             current.next = temp;
//         }

//         current = next!;
//     }

//     return ogHead;
// }


function partition(head: Node, partition: number): Node {
    let smaller: Node;
    let bigger: Node;
    let partitions: Node;

    while (head.next != null) {
        if (head.value < partition) {
            smaller!.next = head;
        } else if (head.value > partition) {
            bigger!.next = head;
        } else {
            partitions!.next = head;
        }

        head = head.next;
    }

    // combine the three linked lists?

}
