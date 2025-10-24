type Customer = { id: string; name: string };
type Order = { id: string; customerId: string; total: number };

const customers: Customer[] = [
    { id: "c1", name: "Alice Johnson" },
    { id: "c2", name: "Bob Smith" },
    { id: "c3", name: "Charlie Nguyen" },
    { id: "c4", name: "Diana Patel" },
];

const orders: Order[] = [
    { id: "o1", customerId: "c1", total: 120 },
    { id: "o2", customerId: "c1", total: 80 },
    { id: "o3", customerId: "c2", total: 45 },
    { id: "o4", customerId: "c3", total: 200 },
    { id: "o5", customerId: "c3", total: 150 },
    { id: "o6", customerId: "c4", total: 60 },
];

// Write a function that returns an array of { customerName: string; total: number } for each order by matching IDs.

function getCustomerTotals(customers: Customer[], order: Order[]): { customerName: string, total: number }[] {
    // iterate thru customers
    // get their orders
    // sum their totals from orders
    // return array of those totals

    return customers.map(customer => {
        const total = orders
            .filter(order => order.customerId === customer.id)
            .reduce((sum, order) => sum + order.total, 0)

        return { customerName: customer.name, total: total }
    })
}