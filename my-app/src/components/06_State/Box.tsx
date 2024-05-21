import {FC, JSX, useEffect, useState} from 'react';

const Box : FC = () : JSX.Element => {
    const [color, setColor] = useState<string>("green");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setColor(prev => prev === "green" ? "red" : "green")
        }, 2000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: color}}
        />
    );
};

export default Box;
