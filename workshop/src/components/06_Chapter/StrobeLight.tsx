import {FC, useEffect, useState} from 'react';

interface Strobe {
    color: string,
    frequency: number
}

const StrobeLight: FC<Strobe> = ({color, frequency}) => {
    const [bgColor, setBGColor] = useState<string>("white");

    useEffect(() => {
        const id = setInterval(() => {
            setBGColor(prevState => {
                return prevState === "white" ? color : "white"
            });

            return () => clearInterval(id);
        }, frequency)
    }, []);

    return (
        <div
            style={{
                width: "500px",
                height: "50px",
                backgroundColor: bgColor
            }}
        />
    )
};

export default StrobeLight;
