import {FC} from "react";

const Buttons : FC = () : JSX.Element => {
    const clickHandler = () => {
        const num1 : number | null = parseInt(prompt("Podaj liczbę A?") ?? "");
        const num2 : number | null = parseInt(prompt("Podaj liczbę B?") ?? "");
        console.log(num1+num2);
    }

    const windowsClickHandler = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e);
        console.log(window.innerWidth, window.innerHeight)
    }
    return (
        <>
          <button onClick={() => console.log("Pierwszy przycisk kliknięty")}>Klik</button>
          <button onClick={clickHandler}>Klik</button>
          <button onClick={e => windowsClickHandler(e)}>Klik</button>
        </>
    );
};

export default Buttons;
