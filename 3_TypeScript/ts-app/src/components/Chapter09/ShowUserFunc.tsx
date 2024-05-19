import {FC, useState} from "react";

type nameProps = {
    name: string,
    surname: string
}

const ShowUserFunc : FC<nameProps> = ({name, surname} : nameProps) => {
    const [isClicked, setClicked] = useState(false);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) : void => {
        console.log(e);
        setClicked(prev => !prev);
    }

    return (
        <>
            <button onClick={e => clickHandler(e)}>Pokaż imię i nazwisko</button>
            {
                isClicked && <h1>{name} {surname}</h1>
            }
        </>
    );
};

export default ShowUserFunc;
