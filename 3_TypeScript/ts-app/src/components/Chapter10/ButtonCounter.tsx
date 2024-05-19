import {FC, useState} from "react";
import ButtonToClick from "./ButtonToClick";

const ButtonCounter : FC = () : JSX.Element => {
    const [counter, setCounter] = useState<number>(0);
    const handleClick = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
          <ButtonToClick counter={counter} handleClick={handleClick} />
        </>
    );
};

export default ButtonCounter;
