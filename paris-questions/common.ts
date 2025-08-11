// Array Intersection – return common unique values between two arrays.
// BigO(N) -> just go through one set (BigO N + M + min(n, m))
function findIntersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const matches: number[] = []

    for (const num of set1) {
        if (set2.has(num)) {
            matches.push(num)
        }
    }

    return matches
}

const nums1 = [1, 2, 3, 4, 5, 6]
const nums2 = [2, 2, 2, 4, 0, 10, 12]

console.log(findIntersection(nums1, nums2))