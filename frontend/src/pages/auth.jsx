import styles from "../css/signUp.module.css"
import {useState} from 'react'
import { registration } from "../services/auth.service"
import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {
    BrowserRouter as Router,
    useNavigate,
  } from "react-router-dom";


  
const Auth = ()=>{

    const navigate = useNavigate();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [isLogin, setIsLogin] = useState(false);
    


    const registrationHandler = async (e) =>{
        if (!password){
            NotificationManager.error("Вы не заполнили необходимые поля.");
            return
        }
        if (password.target.value == password2.target.value)
        {
        const response = await registration(email.target.value,password.target.value)
        if (response) {setIsLogin(true)}
        }
        else{
            NotificationManager.error("Пароль введен неверно.");
        }  
    }

    const loginHandler = async (e) =>{
        navigate(`/cabinet/`);
    }


        return(
            
                <>

                     <section className={styles.container + ' ' + styles.forms}>
                    <div className={styles.form +' ' + styles.login}>
                        <div className={styles.form+'-'+'content'}>
                            <header>{isLogin? 'Авторизация':'Регистрация'}</header>
                            <form action="#">
                                
                               
                                <div className={styles.field+' '+ styles.input+'-field'} onChange={setEmail}>
                                    <input type="email" placeholder="Email" className={styles.input}/>
                                </div>
        
                                <div className={styles.field+' '+ styles.input+'-field'}>
                                    <input
                                        type="password"
                                        placeholder="Пароль"
                                        className={styles.password}
                                        onChange={setPassword}
                                        />
                                    
                                </div>
                                {isLogin? (
                                    <div/>
                                ):
                                <div className={styles.field+' '+ styles.input+'-field'}>
                                    <input
                                        type="password"
                                        placeholder="Пароль еще раз"
                                        className={styles.password}
                                        onChange={setPassword2}
                                        />
                                    
                                </div>
                                }
                                
                                
                                {isLogin? (
                                    <div className={styles.form_link}>
                                    <a href="#" className='forgot-pass'>Забыли пароль?</a>
                                </div>
                                ):
                                <div/>
                                }
                                
        
                                <div className={styles.field+' '+ styles.button_field}>
                                    {isLogin? <button onClick={loginHandler}>Войти</button>:<button onClick={registrationHandler}>Создать аккаунт</button>}
                              
                                </div>
                            </form>
        
                            <div className={styles.form_link}>
                                {isLogin? (
                                     <button onClick={()=>setIsLogin(!isLogin)}>Еще не аккаунта? Нажмите, чтобы создать!</button>
                                ):(
                                    <button className={styles.link} onClick={()=>setIsLogin(!isLogin)}>Уже есть аккаунт? Нажмите, чтобы войти! </button>
                                )

                                }
                               
                            </div>
                        </div>
        
                        
        
        
                       
        
                    </div>
        
        
        
                    </section>
        
        
                    


           


                    <NotificationContainer/>



        </>
    )
    }
    
    export {Auth}
       




