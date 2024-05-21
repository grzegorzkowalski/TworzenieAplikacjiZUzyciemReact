import { FC } from "react";

const Sum : FC<{numbers: number[]}> = ({numbers}) : JSX.Element => {
    return (
        <h1>
            {
                numbers.reduce((prev: number, cur: number) : number => prev + cur)
            }
        </h1>
    );
};

export default Sum;
