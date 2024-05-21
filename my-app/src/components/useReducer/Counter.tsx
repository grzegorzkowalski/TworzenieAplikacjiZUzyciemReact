import React, { useReducer } from 'react';
interface CounterState {
    count: number;
}

type CounterAction =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' };

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