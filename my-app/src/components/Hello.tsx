import {FC, JSX} from "react";

const Hello : FC<{name: string, surname: string}> = (name, surname) : JSX.Element => {
    return (
        <h1>Hello, {name} {surname}</h1>
    );
}

export default Hello;