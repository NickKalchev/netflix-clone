import React, { useEffect, useState } from 'react';
import '../styles/Profile.css';
import Nav from './Nav';
import avatar from '../images/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import moment from 'moment';

function Profile() {

    const user = useSelector(selectUser);

    return (
       <div className="profile">
           <Nav hiddenAvatar />
           <div className="profile__content">
               <h1>Edit Profile</h1>
               <div className="profile__info">
                   <img src={avatar} alt="" />
                   <div className="profile__details">
                       <h2>{user.email}</h2>
                       <div className="profile__plans">
                           <h3>Plans</h3>
                           <p>Renew date: {moment(new Date()).add(1, 'month').format('DD/MM/YYYY')}</p>
                            <button onClick={() => auth.signOut()} className="profile__signOut">
                                Sign Out
                            </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Profile
