import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Person, avg} from "./ts/tasks.ts";
import {Menu} from "./components/Menu.tsx";
import Counter from "./components/useReducer/Counter.tsx";
import TodoList from "./components/useReducer/TodoList.tsx";
import TodoItemMemo from "./components/useCallback/TodoList.tsx";

function App() {
  const [count, setCount] = useState(0)

  console.log(Person.sex, Person.lastName);
  console.log(avg([1,2,3,4,5]));
  const list = [
          {name: "Strona główna", link: "/"},
          {name: "Blog", link: "/blog"},
          {name: "Cennik", link: "/cennik"},
          {name: "Kontakt", link: "/kontakt"}];
  return (
    <>
      <Menu menu={list} />
      <Counter />
      <TodoList />
      <TodoItemMemo />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
