import db, { auth } from "./firebase";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import "./styles/App.css";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Profile from "./components/Profile";
import { hasPlan, noPlan, selectPlan } from "./features/planSlice";

function App() {
  const user = useSelector(selectUser);
  const plan = useSelector(selectPlan);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        db.collection("customers")
          .doc(userAuth.uid)
          .collection("subscriptions")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (subscription) => {
              dispatch(
                hasPlan({
                  plan: subscription.data().role,
                })
              );
            });
          });
      } else {
        dispatch(logout());
        dispatch(noPlan());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : !plan ? (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
