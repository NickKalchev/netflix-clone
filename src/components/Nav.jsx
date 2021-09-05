import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';
import logo from '../images/netflix_logo.png';
import avatar from '../images/avatar.png'
import { useHistory } from 'react-router';

function Nav({ hiddenAvatar }) {

    const [show, setShow] = useState(false);

    const history = useHistory();


    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])

    return (
        <div className={`hiddenNav ${show && 'nav'}`}>
            <div className="nav__content">

                <img onClick={() => history.push('/')} className='nav__logo' src={logo} alt="" />
                {!hiddenAvatar && (
                    <img onClick={() => history.push('/profile')} className='nav__avatar' src={avatar} alt="" />
                )}
                
            </div>
        </div>
    )
}

export default Nav
