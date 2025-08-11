function assert(expected, actual) {
    if (expected != actual) {
        throw new Error(expected + " expected, got " + actual)
    }
}

function detectOverlap(schedule) {
    // iterate over the list (minus 1)
    for (let i = 0; i < schedule.length - 1; i++) {
        // compare i ending to i + 1 start
        // if i + 1 start < i ending, overlap!

        // console.log(schedule[i][0])
        if (schedule[i + 1][0] < schedule[i][1]) {
            return true
        }
    }

    return false
}

// example 1
const meetings1 = [
    [60, 120],   // 1:00–2:00
    [130, 180],  // 2:10–3:00
    [115, 150]   // 1:55–2:30
];
assert(true, detectOverlap(meetings1))

// example 2
const meetings2 = [
    [60, 120],   // 1:00–2:00
    [121, 180],  // 2:01–3:00
    [200, 250]   // 3:20–4:10
];
assert(false, detectOverlap(meetings2))

// example 3
const meetings3 = [
    [60, 120],
    [120, 150]
];
assert(false, detectOverlap(meetings3))

const meetings4 = [
    [200, 240],
    [60, 120],
    [110, 130]
];
assert(true, detectOverlap(meetings4))

const meetings5 = [
    [90, 150],
    [90, 150]
];
assert(true, detectOverlap(meetings5))

const meetings6 = [
    [0, 30],
    [30, 60],
    [90, 150],
    [149, 200]
];
assert(true, detectOverlap(meetings6))