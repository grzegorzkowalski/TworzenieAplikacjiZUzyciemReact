import {TodoState} from "../interfaces/todoState.ts";
import {TodoAction} from "../types/todoAction.ts";
import {Todo} from "../interfaces/todo.ts";

const reducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case 'add':
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            return { todos: [...state.todos, newTodo] };
        case 'remove':
            return { todos: state.todos.filter(todo => todo.id !== action.payload) };
        case 'toggle':
            return {
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        default:
            throw new Error('Nieznany typ akcji');
    }
};

export default reducer;