/*
Problem 3: Wordle Solver
Wordle is a word guessing game where you have 6 attempts to guess a 5-letter word. After each guess, you receive feedback:
- Green: Letter is correct and in the correct position
- Yellow: Letter is in the word but in the wrong position
- Gray: Letter is not in the word at all

Part A: Implement Wordle Feedback
Write a function that takes a target word and a guess, and returns the feedback for each letter.
Input: target word and guess word (both 5 letters, lowercase)
Output: Array of feedback for each position

Example:
target = "crane"
guess = "bread"
output = [gray, green, yellow, yellow, gray]
Explanation:
- b (gray - not in word)
- r (green - correct position)
- e (yellow - in word, wrong position)
- a (yellow - in word, wrong position)
- d (gray - not in word)

Edge case to consider: What happens with duplicate letters? If the target is "robot" and guess is "floor", the first 'o' should be yellow, but the second 'o' should be green.

Part B: Filter Possible Words
Given a dictionary of valid 5-letter words and the feedback from one or more previous guesses, return all words that could still be the target.

Input:
- A dictionary (array of valid 5-letter words)
- Previous guesses and their feedback

Output: Array of all words from the dictionary that match the constraints

Example:
dictionary = ["crane", "crate", "trace", "brake", "grove", "prove", ...]
guess = "slate"
feedback = [gray, gray, yellow, gray, yellow]

This means: s and l and t are not in the word, a is in the word but not position 3, e is in the word but not position 5.
Valid remaining words include: "crane", "crate", "brake" (but not "trace" because it has 't')

Part C: Find the Optimal Starting Word
Given a dictionary of valid target words, find which word makes the best first guess - meaning it eliminates the most possible words on average.
Approach: For each potential starting word, simulate using it as a guess against every possible target word in the dictionary. Calculate how many words remain on average after getting that feedback.
Output: The word that leaves the smallest average number of remaining possibilities.

Example thinking:
- If "slate" leaves an average of 50 words remaining
- And "crate" leaves an average of 45 words remaining
- Then "crate" is the better starting word
*/

function checkLettersImperative(guess: string, target: string): string[] {
    let output: string[] = []

    for (let i = 0; i < target.length; i++) {
        const guessChar = guess[i]
        const targetChar = target[i]

        if (guessChar === targetChar) {
            // matches exactly! green
            output.push('green')
        } else if (target.includes(guessChar)) {
            // char in target, but not at correct position
            output.push('yellow')
        } else {
            // char not in target
            output.push('gray')
        }
    }

    return output
}

function checkLettersFunctional(guess: string, target: string): string[] {
    return [...guess].map((ch, i) =>
        ch === target[i]
            ? "green"
            : target.includes(ch)
                ? "yellow"
                : "gray"
    )
}

console.log(checkLettersImperative("crane", "bread"))
console.log(checkLettersFunctional("crane", "bread"))

