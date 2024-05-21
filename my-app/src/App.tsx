import './App.css'
import artist from './data/artist.ts';
import fruits from "./data/fruits.ts";
import people, {IAvatar} from "./data/people.ts";
import {JSX} from "react";
import Search from "./components/Search.tsx";
import LikeBox from "./components/LikeBox.tsx";
import Menu from "./components/Menu.tsx";
import Box from "./components/06_State/Box.tsx";
import Clock from "./components/06_State/Clock.tsx";
import ColorfulBoxes from "./components/07_Zdarzenia/ColorfulBoxes.tsx";
import CrazyDiv from "./components/07_Zdarzenia/CrazyDiv.tsx";
import Shop from "./components/08_Przekazywanie_zdarzen/Shop.tsx";
import NumberInfo from "./components/09_Blokowanie/NumberInfo.tsx";

function App() {
    // const numA : string | null = prompt("Podaj liczbę A?");
    // const numB : string | null = prompt("Podaj liczbę B?");
    // const color : string | null = prompt("Wybierz kolor (red, green, blue)?");
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
      {/*<h1>{Number(numA) + Number(numB)}</h1>*/}
      <ul>
          <li>{artist.nickname}</li>
          <li>{artist.firstName}</li>
          <li>{artist.age}</li>
          <li>{artist.lastName}</li>
      </ul>
      <p>{fruits.length}</p>
      <p>{fruits.join("-")}</p>
      <img src={imageUrl} style={{height: "150px"}} />
      {/*{returnBox(color!)}*/}
        {
            people.map((el : IAvatar, i: number) => (
                    <div key={i} className="person">
                        <img src={ el.avatar } />
                        <div className="info">
                            <h1>{el.title} {el.name} {el.surname}</h1>
                            <p>{ el.bio }</p>
                        </div>
                    </div>
                ))}
        <Search />
        <LikeBox num={456} />
        <Menu />
        <Box />
        <Clock />
        <ColorfulBoxes />
        <CrazyDiv />
        <Shop />
        <NumberInfo num={1} />
        <NumberInfo num={2} />
        <NumberInfo num={5} />
        <NumberInfo num={7} />
        <NumberInfo num={10} />
        <NumberInfo num={16} />
    </>
  )
}

export default App
