import React, {FC, useState} from 'react';

const MagicBox : FC = () => {
    const [color, setColor] = useState("#000");
    const mouseHandler = () => {
        const randomColor: string = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    }

    return (
        <div
            onMouseEnter={mouseHandler}
            style={{
                width: "200px",
                height: "200px",
                backgroundColor: color
            }}
        />
    );
};

export default MagicBox;
