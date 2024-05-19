import { FC } from "react";

const Quiz : FC = () : JSX.Element => {
    const randomNumber = () : number => {
        return Math.round(Math.random() * 9 + 1);
    }
    const numberA : number = randomNumber();
    const numberB : number = randomNumber();
    const answer : number
        = parseInt(prompt(`Jaki jest wynik dodawania ${numberA} i ${numberB}`) ?? "");

    if (answer === numberA+numberB) {
        return (
            <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: "green"
            }}>
                Poprawna odpowiedź
            </div>
        );
    }
    else {
        return (
            <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: "red"
            }}>
                Nie poprawna odpowiedź
            </div>
        );
    }

};

export default Quiz;
