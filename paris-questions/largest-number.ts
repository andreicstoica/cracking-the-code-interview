// O(N) for unsorted arbitraty array
function findLargest(nums: number[]): number {
    let largest: number = -Infinity;

    for (const num of nums) {
        if (num > largest) {
            largest = num
        }
    }

    return largest;
}

function findLargestSorted(nums: number[]): number {
    nums.sort()
    return nums[nums.length - 1]
}

const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(findLargest(nums))
console.log(findLargestSorted(nums))