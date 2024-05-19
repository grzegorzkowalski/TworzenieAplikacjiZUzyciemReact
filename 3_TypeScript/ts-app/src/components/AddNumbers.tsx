import { FC } from "react";

interface IAdd {
    numberA: number,
    numberB: number
}

const AddNumbers : FC<IAdd> = ({numberA, numberB}) : JSX.Element => {
    return (
        <h1>
            {numberA + numberB}
        </h1>
    );
};

export default AddNumbers;
