import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h1>Focus Input Field</h1>
            <input ref={inputRef} type="text" placeholder="Kliknij przycisk, aby skupić" />
            <button onClick={handleFocus}>Skup</button>
        </div>
    );
};

export default FocusInput;