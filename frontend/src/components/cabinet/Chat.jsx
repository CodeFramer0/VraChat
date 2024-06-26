import { useState, useEffect } from 'react';
import {useParams, Link} from "react-router-dom";
import { Messages } from '../API/Messages';





const get_messages = (messages)=>{
    if (messages.length === undefined){return}

    const messages_data = messages.map((message) => (
        
        <>
        {message.is_bot?(
            <div className="d-flex mb-3">
                <i className="fa-solid fa-circle fa-2x" style={{ color: '#32d704' }}></i>
                <p className="my-chat-message ms-3 mb-0">{message.text}
                </p>
            </div>
        ):
        <div className="d-flex mb-3">
            <i className="fa-solid fa-user fa-2x"></i>
            <p className="my-chat-message note note-light ms-3">{message.text}</p>
        </div>
    }
        </>
        ))
    return (<>{messages_data}</>)
    }
        
        
    



const Chat = () => {
    const params = useParams();
    const chat_id = params.id;
    const [messages, setMessages] = useState([]);
    const [prompt,setPromt] = useState('')
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/messages/?chat_id=${chat_id}`)
        .then(async(res) => {
        // console.log(res)
        console.log(res)
        return await res.json();
        })
        .then((data) => {
        console.log(data);
        setMessages(data);
        });
    }, []);



function sendPromtToBot(promt, chat_id){
    console.log(promt.length)
    if (promt.length === 0){return}
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "chat_id": chat_id,
            "text": promt,
            "is_bot": true,

            })
    };
    fetch('http://127.0.0.1:8000/gemini/', requestOptions)
    .then(response => response.json());
}
const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        sendMessage(prompt.target.value, chat_id)
    }
};
function sendMessage(promt, chat_id)
{
    console.log(promt.length)
    if (promt.length === 0){return}
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "chat_id": chat_id,
            "chat": "string",
            "text": promt,
            "date": "string",
            "is_bot": false

            })
    };
    fetch('http://127.0.0.1:8000/messages/', requestOptions)
    .then(response => response.json());
    
    sendPromtToBot(promt, chat_id)


    fetch(`http://127.0.0.1:8000/messages/?chat_id=${chat_id}`)
        .then((res) => {
        // console.log(res)
        console.log(res)
        return res.json();
        })
        .then((data) => {
            setMessages(data)});
    
    document.querySelector("#prompt_input").value = ""


    


}


    if (chat_id && messages )
    {
    return (

        <main className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-9">
                <section className="card mb-3">
                    <div className="card-header text-muted">Переписка 11 февраля 14:23
                    </div>
                    <div className="card-body">
                        <div className="card-text">
         
                 

                         {get_messages(messages)}
                            
                         
                            
                
                        </div>
                        
                    </div>
                </section>
                <div style={{ paddingbottom:'2%',background:'#303030', boxshadow: '0px -7px 14px 0px #303030' }}
                    className="d-flex align-items-center sticky-bottom">
                    <input  onKeyDown={handleKeyPress} style={{ margintop: '2%',  boxshadow: '0px 0px 2px 2px white'}} type="text"
                        className="form-control form-control-lg me-2 rounded-pill" placeholder="Введите запрос сюда..."
                        id="prompt_input" 
                        onChange={setPromt}/>
                    <button type="button"
                        className="btn btn-success rounded-pill" data-mdb-ripple-init data-mdb-ripple-color="light"
                        id="send_message" onClick={()=>sendMessage(prompt.target.value, chat_id)}>
                        <i className="fa-solid fa-paper-plane fs-3"></i>
                    </button>
                </div>

            </div>
        </div>
        </main>
    

    )
    }
    else{
        return(
            <main className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-9">
                <h2>Чат не выбран</h2>
                    
                    
    
                </div>
            </div>
        </main>
        )
    }
}

export {Chat}