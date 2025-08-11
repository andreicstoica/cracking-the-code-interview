const s = "Andrei Stoica"

// Big O of n
function countVowels(s: string): number {
    const vowels = new Set("aeuio")
    //let count = 0

    // for (let i = 0; i < s.length; i++) {
    //     if (vowels.has(s[i])) {
    //         count++
    //     }
    // }
    // return count

    return [...s].filter((c) => {
        // ignore case
        return vowels.has(c.toLowerCase())
    }).length
}

console.log(countVowels(s))