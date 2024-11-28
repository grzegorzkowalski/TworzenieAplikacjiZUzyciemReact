import Sum from "./components/01_Chapter/Sum";
import Calculator from "./components/01_Chapter/Calculator";
import LikeBox from "./components/04_Chapter/LikeBox";
import Menu from "./components/04_Chapter/Menu";
import Box from "./components/06_Chapter/Box";
import {person} from "./ts/tasks.ts";
import links from "./data/links.js";
import './App.css'
import StrobeLight from "./components/06_Chapter/StrobeLight.tsx";
import Clock from "./components/06_Chapter/Clock.tsx";
import Buttons from "./components/07_Chapter/Buttons.tsx";
import MagicBox from "./components/07_Chapter/MagicBox.tsx";
import Numbers from "./components/07_Chapter/Numbers.tsx";
import ButtonCounter from "./components/08_Chapter/ButtonCounter.tsx";
import NumberInfo from "./components/09_Chapter/NumberInfo.tsx";

function App() {

  person.skills.push("programowanie");
  console.log(person.skills);

  return (
    <>
        {/*<Sum />*/}
        {/*<Calculator />*/}
        {/*<LikeBox likes={500} />*/}
        {/*<Menu menu={links} />*/}
        {/*<Box />*/}
        {/*<StrobeLight color="pink" frequency={500} />*/}
        {/*<StrobeLight color="red" frequency={50} />*/}
        {/*<StrobeLight color="gold" frequency={150} />*/}
        {/*<Clock />*/}
        {/*<Buttons />*/}
        {/*<MagicBox />*/}
        {/*<Numbers />*/}
        <ButtonCounter />
      {
        [1,2,5,7,10,16].map((el, i) => <NumberInfo num={el} />)
      }
    </>
  )
}

export default App
