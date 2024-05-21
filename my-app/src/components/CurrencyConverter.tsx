import { FC } from "react";

type CurrencyProps = {
    from : string,
    to: string,
    value: number
    rate: number
}

const CurrencyConverter : FC<CurrencyProps>
    = ({from, to, value, rate}) : JSX.Element => {
        return (
            <div>
                <strong>{value}</strong> {from} {"=>"} <strong>{(value * rate).toFixed(2)}</strong> {to}
            </div>
        );
};

export default CurrencyConverter;
