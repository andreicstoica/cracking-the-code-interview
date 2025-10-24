type Product = { id: string; name: string; category: "food" | "clothing" | "tech" };
// Write countByCategory(products: Product[]): Record<string, number> that returns an object like { food: 3, clothing: 1, tech: 2 }

const products: Product[] = [
    { id: "0", name: "salt", category: "food" },
    { id: "1", name: "pepper", category: "food" },
    { id: "2", name: "chicken", category: "food" },
    { id: "3", name: "pants", category: "clothing" },
    { id: "4", name: "shirt", category: "clothing" },
    { id: "0", name: "headphones", category: "tech" }
]

function countByCategory(products: Product[]): Record<string, number> {
    // returns an object like { food: 3, clothing: 1, tech: 2 }

    const countsByCategory: Record<string, number> = {}

    products.forEach(product => {
        countsByCategory[product.category] = (countsByCategory[product.category] || 0) + 1
    })

    return countsByCategory
}

console.log(countByCategory(products))