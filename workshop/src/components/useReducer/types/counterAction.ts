export type CounterAction =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' };