import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import { Cabinet } from './pages/cabinet'
function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/cabinet/" element ={<Cabinet/>}/>
      </Routes>
    </div>
    </>

  );
}

export default App;