/*
Write a function fetchUsers(): Promise<User[]> that:
    •	waits 500 ms (use setTimeout + Promise),
    •	returns a hardcoded array of 3 users.

Then write main() that calls it and logs the result.
*/

type MiscUser = {
    id: number,
    name: string
}

function fetchUsers(): Promise<MiscUser[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Andrei" },
                { id: 2, name: "Lily" }
            ])
        }, 500)
    })
}

async function main() {
    const users = await fetchUsers();
    console.log(users);
}

main();
