import React, {FC, useReducer} from 'react';
import {CounterState} from "./interfaces/CounterState";
import reducer from "./reducers/counterReducer";


const Counter : FC = () => {
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
