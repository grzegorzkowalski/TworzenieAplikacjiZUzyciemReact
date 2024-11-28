import Sum from "./components/01_Chapter/Sum";
import Calculator from "./components/01_Chapter/Calculator";
import LikeBox from "./components/04_Chapter/LikeBox";
import Menu from "./components/04_Chapter/Menu";
import Box from "./components/06_Chapter/Box";
import {person} from "./ts/tasks.ts";
import links from "./data/links.js";
import './App.css'

function App() {

  person.skills.push("programowanie");
  console.log(person.skills);

  return (
    <>
        {/*<Sum />*/}
        {/*<Calculator />*/}
        {/*<LikeBox likes={500} />*/}
        {/*<Menu menu={links} />*/}
        <Box />
    </>
  )
}

export default App
