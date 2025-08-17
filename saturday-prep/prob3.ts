/*
Problem Statement:
You are given an integer array nums and an integer k.
Find the contiguous subarray whose sum is closest to k, and return that sum.

If there are multiple subarrays with equally close sums, return the smallest sum among them.

Input: nums = [2, -1, 3, 5], k = 4
Output: 4
Explanation:
Subarrays:
[2] → 2 (diff = 2)
[2, -1] → 1 (diff = 3)
[2, -1, 3] → 4 (diff = 0) ← closest
[3, 5] → 8 (diff = 4) 
[-1, 3, 5] -> 7 (diff = 3)
Answer = 4
*/

//l create subarrays that are just contiguous from a starting index (probably start at 0, then 1, etc.)
// add all numbers in array together
// calculate difference 
// store sums, return smallest diff (k-sum)

function findClosestSubArray(nums: number[], k: number): number {
    let smallestDiff: number = Infinity
    let closestSum: number = Infinity

    // go through subarrays (start index walk)
    for (let startIdx = 0; startIdx < nums.length; startIdx++) {

        // keep track of total to reduce work
        let runningSum = 0

        // go through subarrays (end index walk)
        for (let endIdx = startIdx; endIdx < nums.length; endIdx++) {
            // make subarray
            //const subArray = nums.slice(startIdx, endIdx)
            // calc sum
            //const sum = subArray.reduce((sum, current) => sum += current)

            // calculate total for subarray
            runningSum += nums[endIdx]

            const diff = Math.abs(k - runningSum);

            // update if diff is smaller, or if tie with smaller sum
            if (diff < smallestDiff || (diff === smallestDiff && runningSum < closestSum)) {
                if (diff === 0) return runningSum; // exact match
                smallestDiff = diff;
                closestSum = runningSum;
            }
        }
    }
    return closestSum
}

console.log(findClosestSubArray([2, -1, 3, 5], 4));
// Expected: 4
// subarray [2, -1, 3] → sum = 4

console.log(findClosestSubArray([1, 2, 3], 5));
// Expected: 5
// subarray [2, 3] → sum = 5

console.log(findClosestSubArray([-2, -1, 2, 4], 3));
// Expected: 3
// subarray [-2, -1, 2, 4] → sum = 3 (whole array)

console.log(findClosestSubArray([5, 1, -3, 2], 4));
// Expected: 3
// subarray [5, 1, -3] → sum = 3 (diff = 1), [5] = 5 (diff = 1), pick smaller sum (3)

console.log(findClosestSubArray([10, -5, 7, -2], 6));
// Expected: 5
// subarray [10, -5] = 5 (diff = 1), no exact match
