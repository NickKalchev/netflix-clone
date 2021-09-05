import React, { useRef } from 'react';
import { auth } from '../firebase';
import '../styles/SignIn.css';

function SignIn() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    };
    
    const signin = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    
    };

    return (
        <div className="signIn">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button onClick={signin} type='submit'>Sign In</button>

                <h4>New to Netflix? <span onClick={register} className='signIn__link'>Sign up now.</span></h4>
            </form>
        </div>
    )
}

export default SignIn
