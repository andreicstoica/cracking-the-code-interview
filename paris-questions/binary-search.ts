// BigO(log n) base 2
// search for a target in a sorted array and return its index or -1.
function binarySearch(nums: number[], target: number): number {
    // binary search using index to split up because its sorted!
    const foundIdx = search(nums, target, 0, nums.length - 1)
    if (foundIdx !== undefined) return foundIdx
    return -1
}

function search(nums: number[], target: number, left: number, right: number): number | undefined {
    // end case if not found
    if (left > right) return undefined

    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
        return mid
    } else if (target > nums[mid]) {
        return search(nums, target, mid + 1, nums.length - 1)
    } else {
        return search(nums, target, 0, mid - 1)
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(binarySearch(nums, 2))
console.log(binarySearch(nums, 10))
