#### Zadanie 1: Licznik z wykorzystaniem useReducer

1. W katalogu `components`, utwórz nowy plik i nazwij go `Counter.tsx`.
1. W tym pliku zaimplementujemy nasz nowy komponent licznika.
1. W pliku `Counter.tsx` zdefiniuj typ stanu, który będzie przechowywał wartość licznika. 
```
interface CounterState {
  count: number;
}
```
1. Zdefiniuj typ akcji, który będzie określał możliwe operacje na stanie licznika.
```
type CounterAction = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };
```
1. Zaimplementuj funkcję reduktora, która będzie zarządzała zmianami stanu w zależności od typu akcji.
```
const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Nieznany typ akcji');
  }
};
```
1. Stwórz funkcjonalny komponent Counter, który będzie korzystał z hooka useReducer do zarządzania stanem.
```
import React, { useReducer } from 'react';

const Counter: React.FC = () => {
  const initialState: CounterState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Licznik: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Zwiększ</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Zmniejsz</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;
```
1. Zaimportuj i użyj komponentu `Counter` w pliku `App.tsx`.
1. Użyj komponentu `Counter` wewnątrz głównego komponentu aplikacji.
```
import React from 'react';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
```

#### Zadanie 2: Lista zadań (Todo List) z wykorzystaniem useReducer

1. Stwórz plik `TodoList.tsx`:
1. W katalogu `src`, utwórz nowy plik i nazwij go `TodoList.tsx`.
1. W tym pliku zaimplementujemy nasz komponent listy zadań.
1. W pliku `TodoList.tsx` zdefiniuj typ zadania, który będzie przechowywał informacje o każdym zadaniu.
```
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
```
1. Zdefiniuj typ stanu, który będzie przechowywał listę zadań.
```
interface TodoState {
  todos: Todo[];
}
```
1. Zdefiniuj typ akcji, który będzie określał możliwe operacje na liście zadań.
```
type TodoAction =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }
  | { type: 'toggle'; payload: number };
```
1. Zaimplementuj funkcję reduktora, która będzie zarządzała zmianami stanu w zależności od typu akcji.
```
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
```
1. Stwórz funkcjonalny komponent TodoList, który będzie korzystał z hooka useReducer do zarządzania stanem listy zadań.
```
import React, { useReducer, useState } from 'react';

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
```
1. Użyj komponentu TodoList wewnątrz głównego komponentu aplikacji.
```
import React from 'react';
import TodoList from './TodoList';

const App: React.FC = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
```