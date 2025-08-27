// 22. **Merge Two Sorted Arrays** – combine two sorted arrays into one sorted array. 

function merge(arr1: number[], arr2: number[]): number[] {
    let result: number[] = []

    // since the arr are sorted, iterate through with two pointers, comparing at each step to form the new array
    let p1 = 0
    let p2 = 0

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] > arr2[p2]) {
            result.push(arr2[p2])
            p2++
        } else if (arr1[p1] < arr2[p2]) {
            result.push(arr1[p1])
            p1++
        } else {
            result.push(arr1[p1])
            p1++
            result.push(arr2[p2])
            p2++
        }
    }

    // catch any leftovers
    while (p1 < arr1.length) {
        result.push(arr1[p1])
        p1++
    }

    while (p2 < arr2.length) {
        result.push(arr2[p2])
        p2++
    }

    return result
}

// 1. Basic case
console.log(merge([1, 3, 5], [2, 4, 6]))
// Expected: [1, 2, 3, 4, 5, 6]

// 2. Arrays with duplicate elements
console.log(merge([1, 2, 2], [2, 2, 3]))
// Expected: [1, 2, 2, 2, 2, 3]

// 3. One array empty
console.log(merge([], [1, 2, 3]))
// Expected: [1, 2, 3]

console.log(merge([1, 2, 3], []))
// Expected: [1, 2, 3]

// 4. Both arrays empty
console.log(merge([], []))
// Expected: []

// 5. Arrays with different lengths
console.log(merge([1, 4, 9], [2]))
// Expected: [1, 2, 4, 9]

console.log(merge([1], [2, 3, 4, 5]))
// Expected: [1, 2, 3, 4, 5]

// 6. Arrays already in order relative to each other
console.log(merge([1, 2, 3], [4, 5, 6]))
// Expected: [1, 2, 3, 4, 5, 6]

// 7. Arrays completely overlapping
console.log(merge([1, 1, 1], [1, 1]))
// Expected: [1, 1, 1, 1, 1]

// 8. Negative numbers
console.log(merge([-5, -3, -1], [-4, -2, 0]))
// Expected: [-5, -4, -3, -2, -1, 0]