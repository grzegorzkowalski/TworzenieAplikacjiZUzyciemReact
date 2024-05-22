import Counter from "./components/useReducer/Counter.tsx";
import TodoList from "./components/useReducer/TodoList.tsx";
import TodoListCallback from "./components/useCallback/TodoList.tsx";
import ContactForm from "./components/useCallback/ContactForm.tsx";
import SumCalculator from "./components/useMemo/SumCalculator.tsx";
import React from "react";
import FocusInput from "./components/useRef/FocusInput.tsx";
import ClickCounter from "./components/useRef/ClickCounter.tsx";

function App() {
    return (
    <>
        {/*<Counter />*/}
        {/*<TodoList />*/}
        {/*<TodoListCallback />*/}
        {/*<ContactForm />*/}
        {/*<SumCalculator />*/}
        {/*<FocusInput />*/}
        <ClickCounter />
    </>
  )
}

export default App
