import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../images/netflix_logo.png';
import SignIn from './SignIn';


function Login() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="login">
            <div className="login__background">
                <img className='login__backgroundLogo' src={logo} alt="" />
                <button className="login__button">
                    Sign In
                </button>
                <div className="login__gradient"/>
            </div>

            <div className="login__content">
                {signIn ? (
                    <SignIn />
                ) : (
                    <>
                    <h1 className="login__content--header">
                        Unlimited films, TV programmes and more.
                    </h1>
                    <h2 className="login__content--h2">
                        Watch anywhere. Cancel anytime.
                    </h2>
                    <h3 className="login__content--h3">
                        Ready to watch? Enter your email to create or restart your membership.
                    </h3>

                    <div className="login__input">
                        <form>
                            <input type="email" placeholder='Email Address' />
                            <button onClick={() => setSignIn(true)} className='login__getStartedButton'>GET STARTED</button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default Login
