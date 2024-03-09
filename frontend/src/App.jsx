import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
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
        </Routes>
        </div>

    </>

  );
}



export default App;


