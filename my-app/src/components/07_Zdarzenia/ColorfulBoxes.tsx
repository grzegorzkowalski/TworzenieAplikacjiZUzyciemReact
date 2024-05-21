import {CSSProperties, FC, JSX, MouseEvent, useState} from 'react';

const ColorfulBoxes : FC = () : JSX.Element => {
    const [boxes, setBoxes] = useState<string[]>([]);
    const clickHandler = (e: MouseEvent<HTMLButtonElement>) : void => {
        console.log(e);
        const randomColor: string = '#' + Math.floor(Math.random()*16777215).toString(16);
        setBoxes(prev => [...prev, randomColor]);
    }
    const style: CSSProperties = {
        width: "200px",
        height: "200px"
    }
    return (
        <div>
            {
                boxes.map((el: string, i: number) => <div key={i} style={{...style, backgroundColor: el}} />)
            }
            <button onClick={(e: MouseEvent<HTMLButtonElement> ) : void => clickHandler(e)}>Dodaj Box</button>
        </div>
    );
};

export default ColorfulBoxes;
