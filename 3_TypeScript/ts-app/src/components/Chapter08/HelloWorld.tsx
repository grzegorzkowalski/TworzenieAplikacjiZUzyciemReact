import {FC, useEffect, useState} from "react";

const HelloWorld : FC = () : JSX.Element => {
    const [hello, setHello] = useState<string>( "Hello, World!");
    useEffect(() => {
        setTimeout(() => {
            setHello("Hi, Everyone!");
        }, 5000);
    });
    return (
        <h2>
            {hello}
        </h2>
    );
};

export default HelloWorld;
