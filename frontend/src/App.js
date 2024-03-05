
import Header from './components/Header'
import History from './components/History'
import Chat from './components/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Header/>
     <div className="d-flex">
      <History/>
      <Chat/>
    </div>
    </div>


  );
}

export default App;