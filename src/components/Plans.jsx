import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from '../firebase';
import '../styles/Plans.css';
import { loadStripe } from '@stripe/stripe-js';
import moment from 'moment';
import { hasPlan } from "../features/planSlice";


function Plans() {

    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        db.collection("customers")
        .doc(user.uid)
        .collection("subscriptions")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
                dispatch(
                    hasPlan({
                        plan: subscription.data().role,
                    })
                );
            });
        })
    }, [user.uid, dispatch])

    useEffect(() => {
        db.collection("products")
        .where("active", "==", true)
        .get()
        .then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach(price => {
                  products[productDoc.id].prices = {
                      priceId: price.id,
                      priceData: price.data()
                  };
                });
            });
            setProducts(products);

        });
    }, []);

    const loadCheckout = async (priceId) => {
        const documentRef = await db.collection("customers")
        .doc(user.uid).collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        });

        documentRef.onSnapshot(async(snap) => {
            const { error, sessionId } = snap.data();

            if(error){
                alert(`An error occured: ${error.message}`);
            }

            if(sessionId){
                // Session created, redirect to Checkout
                // Init Stripe

                const stripe = await loadStripe('pk_test_51I33mxAibuHYeKD4JYcQ1gtFnS2Uq7B3sRBvdq0bM30xNqdmor4qgPhrMjTAPkBt386YPiehEq5pARDeLDqabBlv006zg3cLNc');
                stripe.redirectToCheckout({ sessionId });
            }
        })
    };

    return (
        <div className="plans">
            {subscription && (
                <p>Renew date: {moment(new Date(subscription?.current_period_end * 1000)).format('DD/MM/YYYY')}</p>
            )}
            {Object.entries(products).map(([productId, productData]) => {
               const currentPlan = productData.name?.toLowerCase().includes(subscription?.role)

                return (
                    <div key={productId} className={`${currentPlan && "plans__subscriptions--disabled"} plans__subscriptions`}>
                        <div className="plans__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                    
                        <button onClick={() => !currentPlan && loadCheckout(productData.prices.priceId)} >
                            {currentPlan ? 'Current Plan' : 'Subscribe'}    
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Plans
