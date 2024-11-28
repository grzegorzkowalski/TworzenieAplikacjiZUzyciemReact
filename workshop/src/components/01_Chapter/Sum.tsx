import {FC, ReactNode} from 'react';

const Sum : FC = () : ReactNode => {
    const num1 : number  = parseInt(prompt("Podaj pierwszą liczbę?") ?? "");
    const num2 : number  = parseInt(prompt("Podaj drugą liczbę?") ?? "");

    return (
        <div>
            <h1>{num1 + num2}</h1>
        </div>
    );
};

export default Sum;
