type Lead = { name: string; company: string; lastContacted: string };
// Write formatLead(lead: Lead): string → "Name at Company (contacted 3 days ago)".
// Use Date to compute the number of days.

function formatLead(lead: Lead): string {
    const now = new Date()
    const lastContacted = new Date(lead.lastContacted)

    const diffMs = now.getTime() - lastContacted.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) // ms to days, floor to round to whole number

    let timeString: string;
    if (diffDays === 0) timeString = "today";
    else if (diffDays === 1) timeString = "yesterday";
    else timeString = `${diffDays} days ago`;

    return `${lead.name} at ${lead.company} (contacted ${timeString})`
}

const leads: Lead[] = [
    { name: "Alice", company: "Acme Corp", lastContacted: "2025-10-24T09:00:00Z" },
    { name: "Bob", company: "Beta Inc", lastContacted: "2025-10-23T09:00:00Z" },
    { name: "Cara", company: "Citrus LLC", lastContacted: "2025-10-20T09:00:00Z" },
];

for (const lead of leads) console.log(formatLead(lead));
