import React from 'react';
import '../styles/Profile.css';
import Nav from './Nav';
import avatar from '../images/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Plans from './Plans';
import { selectPlan } from "../features/planSlice";

function Profile() {

    const user = useSelector(selectUser);
    const plan = useSelector(selectPlan);

    return (
       <div className="profile">
           <Nav hiddenAvatar />
           <div className="profile__content">
               <h1>Profile</h1>
               <div className="profile__info">
                   <img src={avatar} alt="" />
                   <div className="profile__details">
                       <h2>{user.email}</h2>
                       <div className="profile__plans">
                           <h3>Plans {plan && (`(Current Plan: ${plan.plan})`)}</h3>
                           <Plans />
                           {!plan && (
                                <h4>Please, subscibe to a plan to watch movies and TV shows on <span>Netflix</span></h4>
                            )}
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
