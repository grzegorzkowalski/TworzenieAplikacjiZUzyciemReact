import { FC, useState } from "react";

const CrazyDiv : FC = () => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    function getRandomInt(min : number, max : number) : number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleHover = (min : number, max : number) : void => {
        setLeft(getRandomInt(min, max));
        setTop(getRandomInt(min, max));
    }

    return (
        <div
            style={{
                backgroundColor: "red",
                height: "100px",
                width: "100px",
                position: "absolute",
                left,
                top
            }}
            onMouseEnter={() => handleHover(0, 1000)}
        />
    );
};

export default CrazyDiv;
