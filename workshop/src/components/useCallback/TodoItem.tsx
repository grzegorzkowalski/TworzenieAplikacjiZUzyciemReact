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