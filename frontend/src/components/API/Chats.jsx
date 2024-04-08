import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { generatePath } from "react-router";

const Chats = () => {
  const user_id = Cookies.get('user_id')
  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/chats/?user_id=${user_id}`)
      .then((res) => {

        return res.json();
      })
      .then((data) => {

        setChats(data);
      });
  }, []);
  

  const getCabinetURL = (chat_id) =>{
    // var response = axios.get(`http://127.0.0.1:8000/users?email=${email}&password=${password}`)
    const pathTemplate = "/cabinet/:id/";
    var path = generatePath(pathTemplate, { id: chat_id });
    return path}


  return (
    <div>
      
      {chats.map((chat) => (
    <a href={getCabinetURL(chat.id)} className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
          <i className="fa-regular fa-message fa-fw me-3"></i><span>{chat.date}</span>
    </a>
      ))}
    </div>
  );
};
export default Chats;