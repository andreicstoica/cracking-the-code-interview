type User = { id: number; name: string; active: boolean };
// Write a function getActiveUsers(users: User[]): User[] that returns only users where active === true.

const allUsers = [
    { id: 1, name: "Andrei", active: false },
    { id: 2, name: "Lily", active: true },
    { id: 3, name: "Ali", active: false },
    { id: 4, name: "Cata", active: true },
]

function getActiveUsers(users: User[]): User[] {
    // returns users where active === true

    const activeUsers: User[] = users.filter(user => user.active === true)
    return activeUsers
}

console.log(getActiveUsers(allUsers))