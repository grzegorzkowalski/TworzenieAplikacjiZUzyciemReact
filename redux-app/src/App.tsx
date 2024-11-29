import './App.css'
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import Watcher from "./redux/feature/watcher/Watcher.tsx";

function App() {


  return (
    <Provider store={store}>
      <Watcher />
    </Provider>
  )
}

export default App
