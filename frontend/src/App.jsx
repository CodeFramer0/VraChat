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



function App() {
  return (
    <>
    <div className="App">

    <Routes>

          <Route path="/"element={<Cabinet_check />}/>
          <Route path="/cabinet/"element={<Cabinet />} />
          <Route path="/cabinet/:id" element={<Cabinet />} />
        </Routes>
        </div>

    </>

  );
}



export default App;


