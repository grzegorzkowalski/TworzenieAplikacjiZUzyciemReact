import React, { useState, useCallback } from 'react';
import TodoItem from './TodoItem';

interface Todo {
    id: number;
    text: string;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = useCallback(() => {
        if (newTodo.trim() !== '') {
            setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: newTodo }]);
            setNewTodo('');
        }
    }, [newTodo]);

    const removeTodo = useCallback((id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }, []);

    return (
        <div>
            <h1>Lista zadań</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Nowe zadanie"
            />
            <button onClick={addTodo}>Dodaj</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        onRemove={() => removeTodo(todo.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;