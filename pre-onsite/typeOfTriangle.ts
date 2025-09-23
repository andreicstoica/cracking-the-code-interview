/*
You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

A triangle is called equilateral if it has all sides of equal length.
A triangle is called isosceles if it has exactly two sides of equal length.
A triangle is called scalene if all its sides are of different lengths.
Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

Input: nums = [3,3,3]
Output: "equilateral"
Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.
*/

function findTriangleType(nums: number[]): string {
    const triangleTypes: string[] = ["none", "equilateral", "isosceles", "scalene"]

    nums.sort((a, b) => a - b); // numeric sort, .sort aprntly has edge cases?
    if (nums[0] + nums[1] <= nums[2]) {
        return triangleTypes[0]
    } else {
        const maxDuplicates = new Set(nums).size
        return triangleTypes[maxDuplicates]
    }
}