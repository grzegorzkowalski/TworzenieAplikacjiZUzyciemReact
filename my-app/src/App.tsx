import './App.css'
import artist from './data/artist.ts';
import fruits from "./data/fruits.ts";
import {JSX} from "react";

function App() {
    const numA : string | null = prompt("Podaj liczbę A?");
    const numB : string | null = prompt("Podaj liczbę B?");
    const color : string | null = prompt("Wybierz kolor (red, green, blue)?");
    const imageUrl : string = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
    const returnBox = (color : string) : JSX.Element => {
        const properColor : boolean = ["red", "green", "blue"].includes(color);
        const style : {} = {
            width: "100px",
            height: "100px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: color
        }

        return properColor
            ? <div style={style} />
            : <div>Nieprawidłowy kolor</div>
    };

    return (
    <>
      <h1>{Number(numA) + Number(numB)}</h1>
      <ul>
          <li>{artist.nickname}</li>
          <li>{artist.firstName}</li>
          <li>{artist.age}</li>
          <li>{artist.lastName}</li>
      </ul>
      <p>{fruits.length}</p>
      <p>{fruits.join("-")}</p>
      <img src={imageUrl} style={{height: "150px"}} />
      {returnBox(color!)}
    </>
  )
}

export default App
