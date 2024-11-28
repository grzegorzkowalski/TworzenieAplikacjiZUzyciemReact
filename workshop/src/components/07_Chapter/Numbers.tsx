import React, {useState} from 'react';

const Numbers = () => {
    const originalNumbers = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40];
    const [nums, setNums] = useState<number[]>(originalNumbers);

    const showEven = (tab : number[]) : void => {
        setNums(tab.filter(el => el % 2 === 0));
    }

    const showOdd = (tab : number[]) : void => {
        setNums(tab.filter(el => el % 2 !== 0));
    }

    const showAll = (tab : number[]) : void => {
        setNums(tab);
    }

    return (
        <div>
            <button onClick={() => showEven(originalNumbers)}>Pokaż tylko parzyste</button>
            <button onClick={() => showOdd(originalNumbers)}>Pokaż tylko nieparzyste</button>
            <button onClick={() => showAll(originalNumbers)}>Pokaż wszystkie</button>
            <ul>
                {
                    nums.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Numbers;
