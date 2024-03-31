import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Cabinet } from './pages/cabinet'
import { Auth } from './pages/auth'






function App() {
  return (
    <>
    <div className="App">

    <Routes>
          <Route path="/"element={<Auth/>}/>
          <Route path="/cabinet/"element={<Cabinet/>}/>
          <Route path="/cabinet/:id" element={<Cabinet />} />
        </Routes>
        </div>

    </>

  );
}



export default App;


