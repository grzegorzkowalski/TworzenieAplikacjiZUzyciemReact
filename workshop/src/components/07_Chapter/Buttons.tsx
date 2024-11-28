import React, {FC} from 'react';

// Zadanie 1
const Buttons : FC = () => {

    const clickHandler = () => {
        const numA : number = parseInt(prompt("Podaj pierwszą liczbę") ?? 0);
        const numB : number = parseInt(prompt("Podaj drugą liczbę") ?? 0);
        console.log(numA + numB);
    }

    const clickHandler2 = (e : React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
        console.log(window.innerWidth, window.innerHeight);
    }

    return (
        <div>
             <button onClick={() => console.log("Pierwszy przycisk kliknięty")}>Klik 1</button>
             <button onClick={clickHandler}>Klik 2</button>
             <button onClick={e => clickHandler2(e)}>Klik 3</button>
        </div>
    );
};

export default Buttons;
