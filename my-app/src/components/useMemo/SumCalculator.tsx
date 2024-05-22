import React, { useState, useMemo } from 'react';

const SumCalculator: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [newNumber, setNewNumber] = useState<string>('');

    const addNumber = () => {
        const num = parseFloat(newNumber);
        if (!isNaN(num)) {
            setNumbers(prevNumbers => [...prevNumbers, num]);
            setNewNumber('');
        }
    };

    const sum = useMemo(() => {
        console.log('Calculating sum...');
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    return (
        <div>
            <h1>Kalkulator sumy liczb</h1>
            <div>
                <input
                    type="text"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    placeholder="Dodaj liczbę"
                />
                <button onClick={addNumber}>Dodaj</button>
            </div>
            <p>Suma: {sum}</p>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
};

export default SumCalculator;