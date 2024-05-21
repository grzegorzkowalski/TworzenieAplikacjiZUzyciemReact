import {FC, useState, useEffect} from "react";

const Box : FC = () : JSX.Element => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setColor(placek => {
                console.log(placek);
                return placek === "green" ? "red" : "green"
            });
            return () => clearInterval(intervalID);
        }, 2000)
    }, [color])

    return (
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: color
        }} />
    );
};

export default Box;
