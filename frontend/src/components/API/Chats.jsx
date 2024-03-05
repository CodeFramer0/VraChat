import { useState, useEffect } from 'react';

const Chats = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/chats/')
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setChats(data);
      });
  }, []);
  return (
    <div>
      
      {chats.map((chat) => (
    <a href={chat.id} className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
         <i className="fa-regular fa-message fa-fw me-3"></i><span>{chat.date}</span>
    </a>
      ))}
    </div>
  );
};
export default Chats;