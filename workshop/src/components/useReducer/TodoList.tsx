import React, {useReducer, useState} from 'react';
import {TodoState} from "./interfaces/todoState";
import reducer from "./reducers/toDoListReducer";

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
