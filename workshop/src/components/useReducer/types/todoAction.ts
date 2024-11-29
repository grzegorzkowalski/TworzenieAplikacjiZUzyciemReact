export type TodoAction =
    | { type: 'add'; payload: string }
    | { type: 'remove'; payload: number }
    | { type: 'toggle'; payload: number };