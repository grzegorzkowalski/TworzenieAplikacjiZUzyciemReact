import React, { useReducer, useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}

type TodoAction =
    | { type: 'add'; payload: string }
    | { type: 'remove'; payload: number }
    | { type: 'toggle'; payload: number };

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

const TodoList: React.FC = () => {
    const initialState: TodoState = { todos: [] };
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodoText, setNewTodoText] = useState('');

    const handleAddTodo = () => {
        if (newTodoText.trim() !== '') {
            dispatch({ type: 'add', payload: newTodoText });
            setNewTodoText('');
        }
    };

    return (
        <div>
            <h1>Lista zadań</h1>
            <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Nowe zadanie"
            />
            <button onClick={handleAddTodo}>Dodaj</button>
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => dispatch({ type: 'toggle', payload: todo.id })}>
                            {todo.completed ? 'Oznacz jako nieukończone' : 'Oznacz jako ukończone'}
                        </button>
                        <button onClick={() => dispatch({ type: 'remove', payload: todo.id })}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;