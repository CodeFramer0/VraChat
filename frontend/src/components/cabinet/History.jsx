import axios from 'axios'
import Chats from '../API/Chats'
import Cookies from 'js-cookie';

const History = () =>{ 
    const createChat = async(e) => {

        let user_id = Cookies.get("user_id")
        let date = "2024-04-04T11:00:44.920Z"
        const response = await fetch(`http://127.0.0.1:8000/chats/`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                "user_id": user_id,
                "date": 'date',
                "history": {}
                })
            })
                
        await console.log(await response.json())
    } 


    return (
        <nav id="sidebarMenu" className="col-2 collapse d-lg-block sidebar collapse">
            <div style={{ top:'10%' }} className="sticky-top">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <h4 className="list-group-item py-2">
                        <center><span>Мои чаты</span></center>
                    </h4>
                    
                    <button className="my-sidebar-block list-group-item list-group-item-action py-2 ripple" onClick={createChat}>
                        <center><i className="fa-solid fa-circle-plus"></i> <b>Создать новый</b></center>
                    </button>
                    
                    
                    <hr className="hr hr-blurry" />
                    <div>
                            <Chats/>
                    </div>
                </div>
            </div>
        </nav>


    )
  }





export {History}