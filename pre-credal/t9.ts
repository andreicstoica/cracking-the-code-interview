// T9 (Text on 9 keys) was a predictive text system on old phone keypads 
// where each number key corresponded to multiple letters:
// 2: abc
// 3: def
// 4: ghi
// 5: jkl
// 6: mno
// 7: pqrs
// 8: tuv
// 9: wxyz
// To type a letter, you press the key multiple times. For example, to type 'c', you press 2 three times.
// Implement two functions:

// 1. Decode: Convert an array of key press sequences to a word
// Input: [222, 2, 8] → Output: "cat"
//     (Press 2 three times for 'c', press 2 once for 'a', press 8 once for 't')

const T9: Record<number, string> = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
}

function decodeNumbers(nums: number[]): string {
    let message: string = ''

    for (const num of nums) {
        const digits = num.toString()
        const key = Number(digits[0])
        message += T9[key][digits.length - 1]

        /* better solution for edge case
        const letters = T9[key]
        if (!letters) continue

        // Wrap around if presses exceed the number of letters on the key (e.g., 7777 -> 's')
        const index = (digits.length - 1) % letters.length
        message += letters[index]
        */
    }

    return message
}

console.log(decodeNumbers([222, 2, 8]))


// 2. Encode: Convert a word to the key press sequences needed to type it
// Input: "cat" → Output: [222, 2, 8]
// Note: All input / output should be lowercase only.

function encodeString(word: string): number[] {
    let charToNum: Record<string, number> = {}

    // pass thorugh each value string set and make it the key as a string
    // value will be the number array (key * (charsIdx + 1))
    for (let key = 2; key <= 9; key++) {
        const letters = T9[key]
        if (!letters) continue

        for (let idx = 0; idx < letters.length; idx++) {
            // Repeat the digit 'key' (idx + 1) times, then convert to a number
            // e.g., key=2, idx=2 ('c') => '222' => 222
            charToNum[letters[idx]] = Number(String(key).repeat(idx + 1))
        }
    }

    // use charToNum to return
    const nums: number[] = []
    for (const char of word) {
        const n = charToNum[char]
        if (n !== undefined) nums.push(n)
    }

    return nums
}

console.log(encodeString("andrei"))
