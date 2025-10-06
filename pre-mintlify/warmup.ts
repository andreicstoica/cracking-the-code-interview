type Product = {
    id: string;
    name: string;
    price: number;
    category: 'clothing' | 'electronics' | 'food';
};

const products: Product[] = [
    { id: '1', name: 'T-Shirt', price: 20, category: 'clothing' },
    { id: '2', name: 'iPhone', price: 999, category: 'electronics' },
    { id: '3', name: 'Pizza', price: 15, category: 'food' },
];

function filterByCategory(
    products: Product[],
    category: Product['category']
): Product[] {
    return products.filter(product => product.category === category)
}

// console.log(filterByCategory(products, 'food'))

function averagePrice(products: { price: number }[]): number {
    return products.reduce((sum, current) => sum + current.price, 0) / products.length
}


type User = { id: string; name: string };

function countUniqueUsers(users: User[]): number {
    const ids = new Set(users.map(u => u.id));
    return ids.size;
    // can't directly compare objects bc their references will be different even if the obj is the same
}

// console.log(countUniqueUsers([{ id: '1', name: 'A' }, { id: '1', name: 'A' }, { id: '2', name: 'B' }]))

type UserResponse = { id: string; name: string };
type OrderResponse = { userId: string; orderId: string };

function mergeUserOrders(
    users: UserResponse[],
    orders: OrderResponse[]
): Array<UserResponse & { orders: OrderResponse[] }> {
    return users.map(user => ({
        ...user,
        orders: orders.filter(order => order.userId === user.id),
    }));
}

console.log(mergeUserOrders([{ id: '1', name: 'A' }], [{ userId: '1', orderId: 'x' }]) // → [{ id: '1', name: 'A', orders: [{ userId: '1', orderId: 'x' }] }]
)

/* faster approach:
  const byUser = new Map<string, OrderResponse[]>();

  for (const order of orders) {
    const list = byUser.get(order.userId);
    if (list) list.push(order);
    else byUser.set(order.userId, [order]);
  }

  return users.map(user => ({
    ...user,
    orders: byUser.get(user.id) ?? [],
  }));
*/


type ApiResponse<T> = {
    status: number;
    data: T;
};

type ExtractData<T> =
    T extends ApiResponse<infer D> ? D : never;

/*
type PartialBy<T, K extends keyof T> =
    Omit<T, K> & Partial<Pick<T, K>>;

type Product = { id: string; name: string; price: number };

// Result type: { id?: string; name: string; price: number }
type DraftProduct = PartialBy<Product, 'id'>;

type Event =
    | { type: 'click'; x: number; y: number }
    | { type: 'keypress'; key: string };

function filterEvents<T extends Event['type']>(
    events: Event[],
    type: T
): Extract<Event, { type: T }>[] {
    return events.filter((e): e is Extract<Event, { type: T }> => e.type === type);
}
*/
