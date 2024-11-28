import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick.tsx";

const ButtonCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const updateCounter = () : void => {
        if (typeof setCounter === "function") {
            setCounter(prev => prev + 1);
        }
    }

    return (
        <div>
            <h3>{counter}</h3>
            <ButtonToClick updateCounter={updateCounter} />
        </div>
    );
};

export default ButtonCounter;
