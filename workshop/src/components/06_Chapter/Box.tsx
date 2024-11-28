import {FC, useEffect, useState} from 'react';

const Box : FC = () => {
    const [color, setColor] = useState<string>("green");

    useEffect(() => {
        const id = setInterval(() => {
            setColor(prevState => {
                return prevState === "green" ? "red" : "green"
            });
        }, 2500)
    }, []);

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: color
            }}
        />
    )
};

export default Box;
