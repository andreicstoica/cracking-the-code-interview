// you have a bunch of customer purchase data at a major online retailer.
// you're trying to generate a mailing list of super-spenders on the site.
// a super-spender is defined as someone who spent over $100 last month.
// given the customer data base and the purchase data from last month,
// produce a list of emails of customers who are super-spenders.

type Customer = {
    id: number;
    email: string;
    language: string;
}

const customers = [
    { id: 1, email: "will@email.com", language: "es" },
    { id: 2, email: "paris@email.com", language: "en" },
    { id: 3, email: "jo@email.com", language: "en" },
    { id: 4, email: "zara@email.com", language: "fr" },
    { id: 5, email: "lee@email.com", language: "ko" }
];

type Order = {
    customerId: number;
    items: number;
    amount: number;
}

const orderData = [
    { customerId: 1, items: 3, amount: 6 },
    { customerId: 2, items: 1, amount: 45 },
    { customerId: 3, items: 2, amount: 60 },
    { customerId: 2, items: 2, amount: 70 },
    { customerId: 4, items: 5, amount: 101 },
    { customerId: 1, items: 10, amount: 120 },
    { customerId: 3, items: 1, amount: 39 }
];

// totals: id1=126, id2=115, id3=99, id4=101, id5=0
const expectedOutput = [
    "will@email.com",
    "paris@email.com",
    "zara@email.com"
];

// --- second example ---

const customers2 = [
    { id: 101, email: "ana@email.com", language: "es" },
    { id: 102, email: "ben@email.com", language: "en" },
    { id: 103, email: "chris@email.com", language: "en" },
    { id: 104, email: "dev@email.com", language: "de" }
];

const orderData2 = [
    { customerId: 101, items: 1, amount: 40 },
    { customerId: 101, items: 1, amount: 55 }, // total 95 -> not a super-spender
    { customerId: 102, items: 3, amount: 120 }, // total 120 -> super-spender
    { customerId: 103, items: 2, amount: 80 },
    { customerId: 103, items: 1, amount: 20 }, // total 100 -> not (strictly > 100)
    { customerId: 104, items: 1, amount: 20 }  // total 20 -> not
];

const expectedOutput2 = [
    "ben@email.com"
];

type OrderTotals = {
    customerId: number
    total: number;
}

function findSuperSpenders(customers: Customer[], orderData: Order[]): string[] {
    // first, make a map of superspenders with customer ID as key and order totals as value
    let customerTotals = new Map<number, number>();

    // second, go through orders, update order totals
    for (const order of orderData) {
        if (customerTotals.get(order.customerId)) {
            customerTotals.set(order.customerId, customerTotals.get(order.customerId)! + order.amount)
        } else {
            customerTotals.set(order.customerId, order.amount)
        }
    }

    // return those with order totals > 100
    return customers
        .filter(customer => customerTotals.get(customer.id)! > 100)
        .map(customer => customer.email)
}

console.log("Test 1: ", findSuperSpenders(customers, orderData))
console.log("Expected: ", expectedOutput)

console.log("Test 2: ", findSuperSpenders(customers2, orderData2))
console.log("Expected: ", expectedOutput2)