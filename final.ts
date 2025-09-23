// you're officiating a rock-paper-scissors tournament.
// each player only ever plays one type of hand (always rock, always paper, or always scissors).
// given the strategies for all players and two names, output the winner of a game of rock paper scissors.

const playerStrategies = {
    steve: { age: 20, strategy: 'rock' },
    john: { age: 25, strategy: 'paper' },
    cathy: { age: 31, strategy: 'scissors' },
    joe: { age: 21, strategy: 'rock' },
    nancy: { age: 41, strategy: 'paper' },
    bob: { age: 39, strategy: 'paper' },
    tim: { age: 18, strategy: 'rock' },
    sally: { age: 22, strategy: 'scissors' },
}

type Person = {
    age: number,
    strategy: string
}

function calculateWinner(playerStrategies: Record<string, Person>, name1: string, name2: string): string {
    // first, get strategies

    const move1 = playerStrategies[name1].strategy
    const move2 = playerStrategies[name2].strategy

    if (move1 == 'rock' && move2 == 'paper') {
        return name2
    }

    if (move1 == 'paper' && move2 == 'rock') {
        return name1
    }

    if (move1 == 'rock' && move2 == 'scissors') {
        return name1
    }

    if (move1 == 'scissors' && move2 == 'rock') {
        return name2
    }

    if (move1 == 'paper' && move2 == 'rock') {
        return name1
    }

    if (move1 == 'paper' && move2 == 'scissors') {
        return name2
    }

    if (move1 == 'scissors' && move2 == 'paper') {
        return name1
    }

    return "tie"
}


// steve vs john; john wins, paper beats rock
console.log(calculateWinner(playerStrategies, "steve", "john"))
console.log(calculateWinner(playerStrategies, "steve", "john"))