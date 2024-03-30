import axios from 'axios';

import Cookies from 'universal-cookie';
const cookies = new Cookies();


const registration = (email,password) =>{
   let response = axios.post('http://127.0.0.1:8000/users/',{email:email,password:password})
   .then(function(){
    // NotificationManager.success("Зарегистрирован успешно");
    return true
   })
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.status);
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
  let response = axios.get('http://127.0.0.1:8000/users/',{email:email,password:password})
  .then(function(){
    document.cookie = 'user_id='+response.text
    // cookies.set('id', response.text, { path: '/' });
    console.log(cookies.get('id')); // Pacman
  //  NotificationManager.success("Зарегистрирован успешно");
  })
 .catch(function (error) {
   if (error.response) {
     console.log(error.response.status);
       if (error.response.status === 409){
          //  NotificationManager.error("Данный пользователь уже существует");
           return
       }
   }
   
   return
 });
 return response

}
export {registration,authorization}