type Message = { id: string; from: string; text: string; sentAt: string }; // ISO date
// Write getLatestMessage(messages: Message[]): Message | null that returns the one with the newest sentAt.

const messages = [
    { id: "0", from: "andrei", text: "hey!", sentAt: "2011-10-05T14:48:00.000Z" },
    { id: "1", from: "andrei", text: "ok!", sentAt: "2011-10-05T11:48:00.000Z" },
    { id: "2", from: "andrei", text: "wow this is late!", sentAt: "2011-10-05T22:48:00.000Z" },

]

function getLatestMessage(messages: Message[]): Message | null {
    if (messages.length === 0) return null

    // const sortedMessages: Message[] = messages.sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime())
    // but this would ignore the days? just earliest time?

    return messages.reduce((latest, current) => {
        return new Date(current.sentAt) > new Date(latest.sentAt) ? current : latest
    })
}

console.log(getLatestMessage(messages))