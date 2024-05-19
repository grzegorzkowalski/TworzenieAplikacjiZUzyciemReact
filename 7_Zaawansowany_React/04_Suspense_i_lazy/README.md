#### Zadanie 1: Tworzenie Server Components z TypeScript w Next.js

1. Otwórz terminal i użyj create-next-app z flagą TypeScript, aby stworzyć nowy projekt.
```js
npx create-next-app@latest my-next-app --typescript
cd my-next-app
```
1. Stwórz katalog components w katalogu `src`. W katalogu `src`, utwórz nowy katalog i nazwij go `components`.
1. Stwórz plik `ServerComponent.tsx` w katalogu `components`. W katalogu `components`, utwórz nowy plik i nazwij go `ServerComponent.tsx`.
1. Definiowanie Server Component. Stwórz Server Component, który będzie renderowany po stronie serwera i wyświetlał listę użytkowników.
```js
import React from 'react';

interface User {
  id: number;
  name: string;
}

async function fetchUsers(): Promise<User[]> {
  // Symulacja pobierania danych z API
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
      ]);
    }, 1000);
  });
}

const ServerComponent: React.FC = async () => {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Lista użytkowników</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerComponent;
```
1. Zaimportuj i użyj komponentu ServerComponent w pliku `pages/index.tsx`.
1. Otwórz plik `pages/index.tsx` i zaimportuj komponent ServerComponent. 
1. Użyj komponentu ServerComponent wewnątrz głównego komponentu strony.
```js
import React from 'react';
import dynamic from 'next/dynamic';

const ServerComponent = dynamic(() => import('../components/ServerComponent'), { ssr: true });

const Home: React.FC = () => {
  return (
    <div>
      <h1>Witaj w Next.js z TypeScript!</h1>
      <ServerComponent />
    </div>
  );
};

export default Home;
```
1. Sprawdź, czy lista użytkowników jest renderowana poprawnie po stronie serwera.

#### Zadanie 2: Tworzenie Server Actions z TypeScript w Next.js

1. W katalogu `src`, utwórz nowy katalog i nazwij go `actions`.
1. W katalogu `actions`, utwórz nowy plik i nazwij go `fetchUser.ts`.
1. Stwórz Server Action, który będzie pobierał dane użytkownika z API.
```js
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const user: User = { id: 1, name: 'John Doe' };
    res.status(200).json(user);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```
1. W katalogu `pages/api`, utwórz nowy plik i nazwij go `user.ts`.
1. Zaimportuj i użyj funkcji handler w `pages/api/user.ts`.
```js
export { default } from '../../actions/fetchUser';
```
1. Stwórz plik `components/UserComponent.tsx` i dodaj kod do wywoływania Server Action.
```js
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const UserComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Dane użytkownika</h1>
      {user ? (
        <p>{user.name}</p>
      ) : (
        <p>Ładowanie...</p>
      )}
    </div>
  );
};

export default UserComponent;
```
1. Otwórz plik `pages/index.tsx` i zaimportuj komponent `UserComponent`.
1. Użyj komponentu `UserComponent` wewnątrz głównego komponentu strony.
```js
import React from 'react';
import dynamic from 'next/dynamic';

const ServerComponent = dynamic(() => import('../components/ServerComponent'), { ssr: true });
const UserComponent = dynamic(() => import('../components/UserComponent'), { ssr: false });

const Home: React.FC = () => {
  return (
    <div>
      <h1>Witaj w Next.js z TypeScript!</h1>
      <ServerComponent />
      <UserComponent />
    </div>
  );
};

export default Home;
```

#### Zadanie 3: Użycie useOptimistic do optymistycznych aktualizacji w React z TypeScript

1. Stwórz plik `TodoList.tsx` w katalogu components. Stwórz komponent `TodoList`, który będzie zarządzał listą zadań i używał useOptimistic do optymistycznych aktualizacji.
```js
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, text: 'Zadanie 1', completed: false },
  { id: 2, text: 'Zadanie 2', completed: true },
];

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Lista zadań</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Oznacz jako nieukończone' : 'Oznacz jako ukończone'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```
1. Zaimportuj i użyj komponentu TodoList w pliku `pages/index.tsx`.
```js
import React from 'react';
import dynamic from 'next/dynamic';

const ServerComponent = dynamic(() => import('../components/ServerComponent'), { ssr: true });
const UserComponent = dynamic(() => import('../components/UserComponent'), { ssr: false });
const TodoList = dynamic(() => import('../components/TodoList'), { ssr: false });

const Home: React.FC = () => {
  return (
    <div>
      <h1>Witaj w Next.js z TypeScript!</h1>
      <ServerComponent />
      <UserComponent />
      <TodoList />
    </div>
  );
};

export default Home;
```