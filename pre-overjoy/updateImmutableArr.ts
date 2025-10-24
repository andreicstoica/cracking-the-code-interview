const todos = [
    { id: 1, text: "wash dishes", done: false },
    { id: 2, text: "email client", done: false },
];

type Todo = {
    id: number,
    text: string,
    done: boolean
}

// Write toggleTodo(todos, id) that returns a new array with the matching todo’s done flipped.

function toggleTodo(todos: Todo[], id: number): Todo[] {
    // const copyTodos = structuredClone(todos)
    // copyTodos[id].done = !copyTodos[id].done -> didn't work lol
    return todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
    )
}

// map only changes the ref to the changed todo, the rest won't re-render

console.log("Initial:", todos);

const afterFirstToggle = toggleTodo(todos, 1);
console.log("After toggling #1:", afterFirstToggle);

const afterSecondToggle = toggleTodo(afterFirstToggle, 2);
console.log("After toggling #2:", afterSecondToggle);

const afterToggleAgain = toggleTodo(afterSecondToggle, 1);
console.log("After toggling #1 again:", afterToggleAgain);
