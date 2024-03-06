import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";

import { Cabinet } from './pages/cabinet'
import { Reg } from './pages/reg'

import { Login } from './pages/login'





function App() {

  return (
    <>
    <div className="App">
    <Routes>
          <Route path="/login/"element={<Login/>}/>
          <Route path="/register/"element={<Reg/>}/>
          <Route path="/cabinet/"element={<Cabinet/>}/>
        </Routes>
        </div>

    </>

  );
}



export default App;


