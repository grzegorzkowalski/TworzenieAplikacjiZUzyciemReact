import {Reducer} from "react";
import {CounterState} from "../interfaces/counterState.ts";
import {CounterAction} from "../types/counterAction.ts";

const counterReducer: Reducer<CounterState, CounterAction> = (state, action) => {
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

export default counterReducer;