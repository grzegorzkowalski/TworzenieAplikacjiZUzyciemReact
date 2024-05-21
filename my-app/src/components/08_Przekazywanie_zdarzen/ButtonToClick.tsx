import {FC} from "react";

const ButtonToClick : FC<{counter: number, handleClick: Function}>
    = ({counter, handleClick} : {counter: number, handleClick: Function}) => {
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => handleClick()}>Klik</button>
        </>
    );
};

export default ButtonToClick;
