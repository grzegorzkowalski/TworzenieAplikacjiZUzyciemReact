import {FC, ReactNode} from 'react';

const Calculator : FC = () : ReactNode => {

    const numberA: number = parseFloat(prompt("Podaj liczbę A:") || "0");
    const numberB: number = parseFloat(prompt("Podaj liczbę B:") || "0");
    const operation: string = prompt("Podaj operację (+, -, *, /):");
    let result: ReactNode = <></>;

    switch (operation) {
        case "+":
            result = <h1>Wynik dodawania: {numberA + numberB}</h1>;
            break;
        case "-":
            result = <h2>Wynik odejmowania: {numberA - numberB}</h2>;
        case "*":
            result = <h3>Wynik mnożenia: {numberA * numberB}</h3>;
        case "/":
            result = numberB !== 0 ? (
                <h4>Wynik dzielenia: {numberA / numberB}</h4>
            ) : (
                <h4>Błąd: Dzielenie przez 0!</h4>
            );
        default:
            result = <h4>Nieprawidłowa operacja!</h4>;
    }

    return (
        <div>
            {result}
        </div>
    );
};

export default Calculator;
