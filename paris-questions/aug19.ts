// implement a simple calculator that supports +, -, /, and * on exactly two numbers.
// Your input will be a string, like "4*8" or "66 / 33".
// You don't need to do any validation on the input; assume all operators and numbers are separated by a string.
// Next: implement multiple operations, evaluated left-to-right. e.g "3 - 1 - 1" is 1. "5 * 2 * 2" is 20.
// Next: implement parentheses. "3 - 1 - 1" is 1, but "3 - (1 - 1)" is 3. "4 - (6 - (1 - 1))" is -2.

function calcBuiltIn(arg: string): number {
    return eval(arg)
}

function calc(arg: string): number {
    let accumulator: number | undefined = undefined
    let operator: string | undefined = undefined

    const splitOnSpace: string[] = arg.split(" ")

    for (const step of splitOnSpace) {
        // first step
        if (accumulator === undefined) {
            accumulator = Number(step)

            // if we've just finished an operation and updated accumulator, or second step
        } else if (operator === undefined) {
            operator = step
        } else {
            accumulator = makeCalculation(accumulator, operator, Number(step))
            operator = undefined
        }
    }

    return accumulator!
}

function makeCalculation(a: number, op: string, b: number): number {
    switch (op) {
        case "*":
            return a * b
        case "/":
            return a / b
        case "+":
            return a + b
        case "-":
            return a - b
        default:
            throw new Error(`Unkown operator: ${op}`)
    }
}

function assert(expected, actual) {
    if (expected !== actual) {
        console.log("Test case failed! Expected", expected, "but you returned", actual)
    }
}

// Part 1
assert(20, calc("5 * 4"))
assert(2, calc("66 / 33"))
assert(1, calc("2 - 1"))
assert(50, calc("50 + 0"))

// Part 2
assert(1, calc("3 - 1 - 1"))
assert(20, calc("5 * 2 * 2"))

// // Part 3
// assert(3, calc("3 - (1 - 1)"))