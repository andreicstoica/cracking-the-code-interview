/*
a bakery tracks daily items with:
- name (string)
- cost (number, cost to make)
- price (number, selling price)
- sold (number, units sold)

given an array of items for a day, return an array of the names of items that made net profit at least targetProfit.
net profit for an item = (price - cost) * sold.
if no items meet the target, return [].
*/

type ItemSaleData = {
    name: string
    cost: number
    price: number
    sold: number
}

// O(N + M) where N = len of items, M = len items >= targetProfit
function profitableItems(items: ItemSaleData[], targetProfit: number): string[] {
    // calculate how much profit each item earned ((price-cost) * sold)
    // keep if >= targetProfit

    //console.log('Target profit is: ', targetProfit)

    return items
        .filter(item => calcProfit(item) >= targetProfit)
        .map(item => item.name)
}

// O(N + NlogN ???) where N is len of items 
// NlogN is sorting + going through and returning the chunk, which is N at worst?
function profitableItemsFun(items: ItemSaleData[], targetProfit: number): string[] {
    items = items.sort((a, b) => {
        return calcProfit(a) - calcProfit(b)
    })

    for (const id in items) {
        if (calcProfit(items[Number(id)]) >= targetProfit) {
            return items.slice(Number(id), items.length).map(item => item.name)
        }
    }

    return [""]
}

function calcProfit(item: ItemSaleData): number {
    const { name, cost, price, sold } = item

    //console.log(`Profit of ${name}: `, profit)
    return (price - cost) * sold
}

// test case 1
const day1 = [
    { name: "croissant", cost: 1.2, price: 2.5, sold: 30 },
    { name: "bagel", cost: 0.5, price: 1.5, sold: 20 },
    { name: "muffin", cost: 0.8, price: 2.0, sold: 10 }
];
console.log(profitableItems(day1, 20));
console.log(profitableItemsFun(day1, 20));
// expected: ["croissant", "bagel"]

// test case 2
const day2 = [
    { name: "donut", cost: 0.6, price: 1.0, sold: 15 },
    { name: "brownie", cost: 1.0, price: 3.0, sold: 15 },
    { name: "tart", cost: 2.0, price: 5.0, sold: 1 }
];
console.log(profitableItems(day2, 15));
console.log(profitableItemsFun(day2, 15));
// expected: ["brownie"]