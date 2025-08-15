// given events as minutes - from - midnight and now (same units),
// return the title of the soonest event with start ≥ now; 
// if none, return null.

const events = [
    { title: "happy hour", start: 0 },
    { title: "standup", start: 540 },   // 9:00
    { title: "1:1", start: 600 },       // 10:00
    { title: "retro", start: 900 },      // 15:00
    { title: "happy hour", start: 200 },
    { title: "happy hour", start: 1100 }
];

const now = 601;

// expected: "retro"  // 600 has passed; next is 900


// faster way to do this from Paris:
// go through twice (2n time)
// can subtract start with now time and return the start with the smallest positive number from subtraction

// my 15 min solution:
type event = {
    title: string;
    start: number;
}

function findNextEvent(events: event[], now: number) {
    // need to cycle through events, 
    // find the one that is after now
    // if there is one after now, return it
    // else, return null;

    //const eventsMap = new Map<string, number>(events)

    // make sure it's sorted
    events.sort((a, b) => a.start - b.start)

    // filter only events after start time
    const laterEvents = events.filter(event => event.start > now)

    // if we have at least one, return the next one
    if (laterEvents[0]) return laterEvents[0].title

    // none found after start time
    return null;
}

console.log("Next event is:", findNextEvent(events, now))
console.log("Next event is:", findNextEvent(events, 150))

// O(N) to find later events + whatever sorting is 