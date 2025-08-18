// you are travelling around the world and currently in London's airport. 
// you are trying to get to Tokyo to meet your friend. However, you're extremely
// short on cash and can only take cheap flights to get there. You are willing to make
// any amount of layovers as long as you get there on the cheap.
// Given a list of cheap flights from a city to a city, return if it's possible to get to Tokyo
// from London by taking any number of flights.
// Note: flights are not bidirectional. If there's a flight from London to Madrid, there may not be one
// from Madrid to London.

type Flight = {
    from: string,
    to: string
}

// should have used Sets to avoid O(N^2) -> basically reachable 

function hasLondonToTokyo(flights: Flight[]): boolean {
    let path: string[] = ['London']

    path = findPath(flights, path, 'Tokyo')

    if (path.length > 1 && path) {
        console.log(path)
        return true
    } else {
        return false
    }
}

function findPath(flights: Flight[], path: string[], destination: string): string[] {
    // loop through chains recursively until a path to destination is found
    // base case
    const current = path[path.length - 1]

    if (current === destination) return path

    // continue going down options
    for (const flight of flights) {
        if (flight.from === current && !path.includes(flight.to)) {
            path.push(flight.to)
            findPath(flights, path, destination)

            // allow for backtracking so we don't keep polluted paths
            const result = findPath(flights, path, destination);
            if (result[result.length - 1] === destination) {
                return result; // success, bubble up with correct path
            }

            // backtrack
            path.pop();
        }
    }

    return path
}

function assert(expected, actual) {
    if (expected !== actual) {
        console.log("Test case failed! Expected", expected, "but you returned", actual)
    }
}

const flights1 = [
    { from: "London", to: "Madrid" },
    { from: "London", to: "Berlin" },
    { from: "Berlin", to: "Vladivostok" },
    { from: "Madrid", to: "London" },
    { from: "Vladivostok", to: "Tokyo" },
] // should return "true": London -> Berlin -> Vladivostok -> Tokyo
assert(true, hasLondonToTokyo(flights1))

const flights2 = [
    { from: "Vladivostok", to: "Tokyo" },
    { from: "London", to: "Berlin" },
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
] // should return "false"
assert(false, hasLondonToTokyo(flights2))

const flights3 = [
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
    { from: "Paris", to: "London" },
    { from: "Berlin", to: "New York" },
    { from: "New York", to: "Paris" },
    { from: "Tokyo", to: "London" },
]
assert(false, hasLondonToTokyo(flights3))

const flights4 = [
    { from: "London", to: "Paris" },
    { from: "Paris", to: "Berlin" },
    { from: "Paris", to: "London" },
    { from: "Paris", to: "New York" },
    { from: "New York", to: "Paris" },
    { from: "Paris", to: "Seoul" },
    { from: "Paris", to: "Beijing" },
    { from: "Paris", to: "Singapore" },
    { from: "Singapore", to: "Tokyo" },
] // should return "true" (London -> Paris -> Singapore -> Tokyo)
assert(true, hasLondonToTokyo(flights4))