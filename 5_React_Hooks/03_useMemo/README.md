#### Zadanie 1: Lista zadań z funkcją dodawania zoptymalizowaną za pomocą useCallback

1. Stwórz plik `TodoList.tsx`.
1. Stwórz komponent `TodoItem`, który będzie reprezentował pojedyncze zadanie.
```js
import React from 'react';

interface TodoItemProps {
  text: string;
  onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onRemove }) => {
  return (
    <li>
      {text}
      <button onClick={onRemove}>Usuń</button>
    </li>
  );
};

export default React.memo(TodoItem);
```
1. Stwórz komponent `TodoList`, który będzie zarządzał listą zadań i używał `useCallback` do optymalizacji funkcji dodawania i usuwania zadań.
```js
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
```
1. Użyj komponentu `TodoList` wewnątrz głównego komponentu aplikacji.
```js
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

#### Zadanie 2: Formularz z użyciem useCallback do obsługi zdarzeń

1. Utwórz nowy plik i nazwij go `ContactForm.tsx`.
1. Stwórz komponent `ContactForm`, który będzie zarządzał stanem formularza i używał `useCallback` do optymalizacji funkcji obsługi zdarzeń.
```js
import React, { useState, useCallback } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formularz kontaktowy</h1>
      <div>
        <label>
          Imię:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Wiadomość:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default ContactForm;
```
1. Użyj komponentu `ContactForm` wewnątrz głównego komponentu aplikacji.
```js
import React from 'react';
import ContactForm from './ContactForm';

const App: React.FC = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default App;
```
