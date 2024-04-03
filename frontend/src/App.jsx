import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Cookies from 'js-cookie';

import { Cabinet } from './pages/cabinet'
import { Auth } from './pages/auth'


function Cabinet_check(){
  let is_logged = Cookies.get('is_logged')
  if (is_logged === "True"){
    return <Navigate to="/cabinet/" />;
  }
  else{
    return <Auth />
  }
}

function Logout(){
  Cookies.set('is_logged',"False")
    return <Navigate to="/" />;
}


function App() {
  return (
    <>
    <div className="App">

    <Routes>

          <Route path="/"element={<Cabinet_check />}/>
          <Route path="/cabinet/"element={<Cabinet />} />
          <Route path="/cabinet/:id" element={<Cabinet />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        </div>

    </>

  );
}



export default App;