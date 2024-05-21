import {FC, JSX} from 'react';

const NumberInfo : FC<{num: number}> = ({num}) : JSX.Element => {

    function isPrime(num2: number) : boolean {
        let start = 2;
        const limit = Math.sqrt(num2);
        while (start <= limit) {
            if (num2 % start++ < 1) return false;
        }
        return num2 > 1;
    }

    function powerOfTwo(x: number) : boolean {
        return (Math.log(x)/Math.log(2)) % 1 === 0;
    }

    return (
        <ul>
            <li>{num}</li>
            <li>{num % 2 === 0 ? "Parzyste" : "Nieparzyste"}</li>
            {isPrime(num) && <li>Liczba pierwsza</li>}
            {powerOfTwo(num) && <li>Potęga liczby 2</li>}
        </ul>
    );
};

export default NumberInfo;
