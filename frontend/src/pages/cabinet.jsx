import {Header} from '../components/Header'
import {History} from '../components/History'
import {Chat} from '../components/Chat'

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