import React, {FC} from "react";

const ColorQuiz : FC = () : JSX.Element => {
    const color : string | null = prompt("Wybierz kolor (czerwony, niebieski, zielony)?");
    type colorSchema = {
        kolor: string,
        color: string
    }
    const colors: Array<colorSchema> =  [
        {kolor: "czerwony", color: "red" },
        {kolor: "niebieski", color: "blue" },
        {kolor: "zielony", color: "green" }
    ];
    const element : Array<colorSchema> = colors.filter(el => el.kolor === color);

    return (
        <>
            { element.length
                ? <div style={{
                    width: "200px",
                    height: "200px",
                    border: `5px solid ${element[0].color}`
                }} />
                : <div>Nieprawidłowy kolor</div>
            }
        </>
    );
};

export default ColorQuiz;
