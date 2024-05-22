import React, { useState, useRef } from 'react';

const ClickCounter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const clickCountRef = useRef<number>(0);

    const handleClick = () => {
        clickCountRef.current += 1;
        if (clickCountRef.current === 10) {
            setCount(prevCount => prevCount + 1);
        }
        console.log(`Przycisk kliknięty ${clickCountRef.current} razy`);
    };

    return (
        <div>
            <h1>Click Counter</h1>
            <p>Liczba kliknięć: {clickCountRef.current}</p>
            <button onClick={handleClick}>Kliknij mnie</button>
        </div>
    );
};

export default ClickCounter;