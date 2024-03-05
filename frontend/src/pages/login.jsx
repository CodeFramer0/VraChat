
import styles from "../css/auth.module.css"
import "../js/auth.js"





const Login = ()=>{
    console.log(styles)
        return(
        <>
             <section className={styles.container + ' ' + styles.forms}>
            <div className={styles.form +' ' + styles.login}>
                <div className={styles.form+'-'+'content'}>
                    <header>Login</header>
                    <form action="#">
                        <div className={styles.field+' '+ styles.input+'-field'}>
                            <input type="email" placeholder="Email" className={styles.input}/>
                        </div>

                        <div className={styles.field+' '+ styles.input+'-field'}>
                            <input type="password" placeholder="Password" className={styles.password}/>
                            
                        </div>

                        <div className={styles.form_link}>
                            <a href="#" className='forgot-pass'>Forgot password?</a>
                        </div>

                        <div className={styles.field+' '+ styles.button_field}>
                            <button>Login</button>
                        </div>
                    </form>

                    <div className={styles.form_link}>
                        <span>Don't have an account? <a href="#" className={styles.link}>Signup</a></span>
                    </div>
                </div>

                <div className={styles.line}></div>


                <div className={styles.media_options}>
                    <a href="#" className="field google">
                        <img src="#" alt="" className="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>



            <div className="form signup">
                <div className="form-content">
                    <header>Signup</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Create password" className="password"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Confirm password" className="password"/>
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="field button-field">
                            <button>Signup</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Already have an account? <a href="#" className="link login-link">Login</a></span>
                    </div>
                </div>

                <div className="line"></div>

                <div className="media-options">
                    <a href="#" className="field facebook">
                        <i className='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div className="media-options">
                    <a href="#" className="field google">
                        <img src="#" alt="" className="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>
        </section>


            



        </>
    )
    }
    
    export {Login}
       
