import {Header} from '../components/cabinet/Header'
import {History} from '../components/cabinet/History'
import {Chat} from '../components/cabinet/Chat'
import {
    BrowserRouter as Router,
    useNavigate,
  } from "react-router-dom";


const Cabinet = ()=>{
    return(
    <>
        <Header/>
        <div className="d-flex">
            <History/>
            <Chat/>
        </div>
    </>
)
}
export {Cabinet}