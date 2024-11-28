import {FC, JSX, useState} from 'react';

const CrazyDiv : FC = () : JSX.Element => {
    const [left, setLeft] = useState<number>(0);
    const [top, setTop] = useState<number>(0);
    const mouseHandler = () => {
        function getRandomInt(min : number, max : number) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        setLeft(getRandomInt(0,800));
        setTop(getRandomInt(0,800));
    }
    return (
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
            position: "absolute",
            left,
            top
        }}
             onMouseEnter={() => mouseHandler()}
        />
    );
};

export default CrazyDiv;