const emails = ["a@test.com", "b@test.com", "a@test.com"];
// get unique emails

function getUniqueEmails(emails: string[]): string[] {
    return [...new Set(emails)]
    // same as return Array.from(new Set(emails))
}

/* 
from AI:
If you wanted case-insensitive uniqueness (e.g., "A@x.com" and "a@x.com" count as same):

function getUniqueEmails(emails: string[]): string[] {
  return [...new Set(emails.map(e => e.toLowerCase()))]
}
*/

function getBetterUniqueEmails(emails: string[]): string[] {
    return [... new Set(emails.map(e => e.toLocaleLowerCase()))]
}
