import axios from 'axios';

import Cookies from 'js-cookie';


const registration = (email,password) =>{
   let response = axios.post('http://127.0.0.1:8000/users/',{email:email,password:password})
   .then(function(){
    // NotificationManager.success("Зарегистрирован успешно");
    return true
   })
  .catch(function (error) {
    if (error.response) {
        if (error.response.status === 409){
            // NotificationManager.error("Данный пользователь уже существует");
            return false
        }
    }
    
    return
  });
  return response

}

const authorization = (email,password) =>{
    // var response = axios.get(`http://127.0.0.1:8000/users?email=${email}&password=${password}`)
    const response = fetch(`http://127.0.0.1:8000/users?email=${email}&password=${password}`)
    .then((res) => {
    if(res.status === 200){
            return res.json()
          }
          else{return false}
        })
    return response}
  
  


export {registration,authorization}